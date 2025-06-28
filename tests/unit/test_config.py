"""Unit tests for configuration management."""

import pytest
from pathlib import Path

from nexus_dev_agent.config import AgentConfig, ObservationConfig, ActionConfig, SecurityConfig


class TestAgentConfig:
    """Test cases for AgentConfig class."""

    def test_default_config_creation(self):
        """Test creating config with default values."""
        config = AgentConfig()

        assert config.observation.monitor_copilot is True
        assert config.observation.monitor_terminal is True
        assert config.action.auto_execute is True
        assert config.security.require_confirmation is True

    def test_config_serialization(self, temp_config_dir):
        """Test saving and loading configuration."""
        config = AgentConfig()
        config.observation.polling_interval = 1.0
        config.action.retry_attempts = 5

        config_path = temp_config_dir / "test_config.yaml"
        config.save_to_file(config_path)

        loaded_config = AgentConfig.load_from_file(config_path)

        assert loaded_config.observation.polling_interval == 1.0
        assert loaded_config.action.retry_attempts == 5

    def test_expanded_data_dir(self):
        """Test data directory path expansion."""
        config = AgentConfig()
        config.data_dir = "~/test-data"

        expanded_path = config.expanded_data_dir
        assert str(expanded_path).startswith("/")  # Should be absolute path
        assert "test-data" in str(expanded_path)

    def test_config_validation(self):
        """Test configuration validation."""
        # Test valid config
        config = AgentConfig(
            observation=ObservationConfig(polling_interval=0.1),
            action=ActionConfig(retry_attempts=1),
            security=SecurityConfig(permission_level="restricted")
        )

        assert config.observation.polling_interval == 0.1
        assert config.action.retry_attempts == 1
        assert config.security.permission_level == "restricted"