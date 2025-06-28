"""Main agent class for Nexus Dev Agent."""

import logging
import threading
import time
from pathlib import Path
from typing import Optional

from .config import AgentConfig, get_default_config_path
from .exceptions import NexusAgentError
from .observer import AgentObserver
from .executor import ActionExecutor
from .learning import LearningEngine
from .repository import ActionRepository


logger = logging.getLogger(__name__)


class NexusAgent:
    """Main agent class that coordinates all components."""

    def __init__(self, config_path: Optional[Path] = None):
        """Initialize the Nexus Dev Agent.

        Args:
            config_path: Path to configuration file. Uses default if None.
        """
        self.config_path = config_path or get_default_config_path()
        self.config = AgentConfig.load_from_file(self.config_path)

        # Initialize components
        self.repository = ActionRepository(self.config.expanded_data_dir)
        self.observer = AgentObserver(self.config)
        self.executor = ActionExecutor(self.config)
        self.learning = LearningEngine(self.config, self.repository)

        # Agent state
        self._running = False
        self._thread: Optional[threading.Thread] = None

        logger.info("Nexus Dev Agent initialized")

    def start(self) -> None:
        """Start the agent monitoring and automation."""
        if self._running:
            logger.warning("Agent is already running")
            return

        logger.info("Starting Nexus Dev Agent")
        self._running = True
        self._thread = threading.Thread(target=self._run_loop, daemon=True)
        self._thread.start()

    def stop(self) -> None:
        """Stop the agent."""
        if not self._running:
            logger.warning("Agent is not running")
            return

        logger.info("Stopping Nexus Dev Agent")
        self._running = False

        if self._thread:
            self._thread.join(timeout=5.0)

    def pause(self) -> None:
        """Pause agent automation (continue monitoring)."""
        logger.info("Pausing agent automation")
        self.executor.pause()

    def resume(self) -> None:
        """Resume agent automation."""
        logger.info("Resuming agent automation")
        self.executor.resume()

    def is_running(self) -> bool:
        """Check if agent is running."""
        return self._running

    def get_status(self) -> dict:
        """Get agent status information."""
        return {
            "running": self._running,
            "paused": self.executor.is_paused(),
            "patterns_learned": len(self.repository.get_all_patterns()),
            "actions_executed": self.executor.get_action_count(),
            "uptime": time.time() - getattr(self, "_start_time", time.time()),
        }

    def _run_loop(self) -> None:
        """Main agent execution loop."""
        self._start_time = time.time()

        try:
            while self._running:
                try:
                    # Observe for prompts
                    prompts = self.observer.scan_for_prompts()

                    for prompt in prompts:
                        self._handle_prompt(prompt)

                    # Sleep for polling interval
                    time.sleep(self.config.observation.polling_interval)

                except Exception as e:
                    logger.error(f"Error in agent loop: {e}")
                    time.sleep(1.0)  # Brief pause on error

        except Exception as e:
            logger.critical(f"Critical error in agent loop: {e}")
            raise NexusAgentError(f"Agent loop failed: {e}")

    def _handle_prompt(self, prompt) -> None:
        """Handle a detected prompt."""
        try:
            # Check if we have a learned pattern
            pattern = self.repository.find_pattern(prompt)

            if pattern:
                # Execute known action
                logger.info(f"Executing known action for prompt: {prompt.text}")
                self.executor.execute_action(pattern.action, prompt)
            else:
                # Learn new behavior
                logger.info(f"Learning new behavior for prompt: {prompt.text}")
                self.learning.learn_behavior(prompt)

        except Exception as e:
            logger.error(f"Error handling prompt: {e}")