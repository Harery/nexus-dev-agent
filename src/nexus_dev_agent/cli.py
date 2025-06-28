"""Command-line interface for Nexus Dev Agent."""

import logging
import sys
import time
from pathlib import Path

import click
from rich.console import Console
from rich.table import Table

from .agent import NexusAgent
from .config import configure, get_default_config_path


console = Console()


@click.group()
@click.option("--config", type=click.Path(exists=True), help="Configuration file path")
@click.option("--verbose", "-v", is_flag=True, help="Enable verbose logging")
@click.pass_context
def cli(ctx, config, verbose):
    """Nexus Dev Agent - Autonomous development assistant."""
    # Setup logging
    level = logging.DEBUG if verbose else logging.INFO
    logging.basicConfig(level=level, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")

    # Store config path in context
    ctx.ensure_object(dict)
    ctx.obj["config_path"] = Path(config) if config else None


@cli.command()
@click.pass_context
def start(ctx):
    """Start the Nexus Dev Agent."""
    config_path = ctx.obj.get("config_path")
    agent = NexusAgent(config_path)

    console.print("[green]Starting Nexus Dev Agent...[/green]")

    try:
        agent.start()
        console.print("[green]✓ Agent started successfully[/green]")

        # Keep running until interrupted
        while True:
            time.sleep(1)

    except KeyboardInterrupt:
        console.print("\n[yellow]Stopping agent...[/yellow]")
        agent.stop()
        console.print("[green]✓ Agent stopped[/green]")
    except Exception as e:
        console.print(f"[red]Error: {e}[/red]")
        sys.exit(1)


@cli.command()
@click.pass_context
def status(ctx):
    """Show agent status."""
    config_path = ctx.obj.get("config_path")
    agent = NexusAgent(config_path)

    status_info = agent.get_status()

    table = Table(title="Nexus Dev Agent Status")
    table.add_column("Property", style="cyan")
    table.add_column("Value", style="green")

    table.add_row("Running", "✓" if status_info["running"] else "✗")
    table.add_row("Paused", "✓" if status_info["paused"] else "✗")
    table.add_row("Patterns Learned", str(status_info["patterns_learned"]))
    table.add_row("Actions Executed", str(status_info["actions_executed"]))
    table.add_row("Uptime", f"{status_info['uptime']:.1f}s")

    console.print(table)


@cli.command()
def configure_agent():
    """Configure the agent interactively."""
    configure()


@cli.command()
@click.pass_context
def stop(ctx):
    """Stop the running agent."""
    # This would need to be implemented with proper IPC
    console.print("[yellow]Stop command not yet implemented[/yellow]")
    console.print("Use Ctrl+C to stop a running agent")


def main():
    """Main entry point."""
    cli()


if __name__ == "__main__":
    main()