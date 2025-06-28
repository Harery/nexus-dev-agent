"""Configuration management for Nexus Dev Agent."""

import os
from pathlib import Path
from typing import Any, Dict, Optional

import yaml
from pydantic import BaseModel, Field


class ObservationConfig(BaseModel):
    """Configuration for observation settings."""

    monitor_copilot: bool = Field(default=True, description="Enable Copilot panel monitoring")
    monitor_terminal: bool = Field(default=True, description="Enable terminal monitoring")
    polling_interval: float = Field(default=0.5, description="Polling interval in seconds")
    ui_detection_sensitivity: str = Field(default="medium", description="UI detection sensitivity")


class ActionConfig(BaseModel):
    """Configuration for action execution settings."""

    auto_execute: bool = Field(default=True, description="Auto-execute known actions")
    confirmation_timeout: float = Field(default=30.0, description="Confirmation timeout in seconds")
    action_delay: float = Field(default=0.1, description="Delay between actions in seconds")
    retry_attempts: int = Field(default=3, description="Number of retry attempts")


class SecurityConfig(BaseModel):
    """Configuration for security settings."""

    require_confirmation: bool = Field(default=True, description="Require confirmation for high-risk actions")
    audit_logging: bool = Field(default=True, description="Enable audit logging")
    sandbox_mode: bool = Field(default=True, description="Restrict to VS Code process only")
    permission_level: str = Field(default="standard", description="Permission level")


class AgentConfig(BaseModel):
    """Main configuration class for Nexus Dev Agent."""

    observation: ObservationConfig = Field(default_factory=ObservationConfig)
    action: ActionConfig = Field(default_factory=ActionConfig)
    security: SecurityConfig = Field(default_factory=SecurityConfig)
    vscode_path: Optional[str] = Field(default=None, description="Path to VS Code executable")
    log_level: str = Field(default="INFO", description="Logging level")
    data_dir: str = Field(default="~/.nexus-dev-agent", description="Data directory path")

    @classmethod
    def load_from_file(cls, config_path: Path) -> "AgentConfig":
        """Load configuration from YAML file."""
        if not config_path.exists():
            return cls()

        with open(config_path, "r") as f:
            config_data = yaml.safe_load(f)

        return cls(**config_data)

    def save_to_file(self, config_path: Path) -> None:
        """Save configuration to YAML file."""
        config_path.parent.mkdir(parents=True, exist_ok=True)

        with open(config_path, "w") as f:
            yaml.dump(self.dict(), f, default_flow_style=False)

    @property
    def expanded_data_dir(self) -> Path:
        """Get expanded data directory path."""
        return Path(os.path.expanduser(self.data_dir))


def get_default_config_path() -> Path:
    """Get the default configuration file path."""
    return Path.home() / ".nexus-dev-agent" / "config.yaml"


def configure() -> None:
    """Interactive configuration setup."""
    print("Nexus Dev Agent Configuration Setup")
    print("=" * 40)

    config = AgentConfig()
    config_path = get_default_config_path()

    # Load existing config if available
    if config_path.exists():
        config = AgentConfig.load_from_file(config_path)
        print(f"Loaded existing configuration from {config_path}")

    # Interactive configuration
    print("\nObservation Settings:")
    config.observation.monitor_copilot = _get_bool_input(
        "Monitor Copilot panel", config.observation.monitor_copilot
    )
    config.observation.monitor_terminal = _get_bool_input(
        "Monitor terminal", config.observation.monitor_terminal
    )

    print("\nAction Settings:")
    config.action.auto_execute = _get_bool_input(
        "Auto-execute known actions", config.action.auto_execute
    )

    print("\nSecurity Settings:")
    config.security.require_confirmation = _get_bool_input(
        "Require confirmation for high-risk actions", config.security.require_confirmation
    )

    # Save configuration
    config.save_to_file(config_path)
    print(f"\nConfiguration saved to {config_path}")


def _get_bool_input(prompt: str, default: bool) -> bool:
    """Get boolean input from user."""
    default_str = "Y" if default else "N"
    response = input(f"{prompt} [{default_str}/n]: ").strip().lower()

    if not response:
        return default

    return response in ["y", "yes", "true", "1"]