"""Pytest configuration and fixtures."""

import pytest
from pathlib import Path
from unittest.mock import Mock

from nexus_dev_agent.config import AgentConfig


@pytest.fixture
def temp_config_dir(tmp_path):
    """Create a temporary configuration directory."""
    config_dir = tmp_path / "config"
    config_dir.mkdir()
    return config_dir


@pytest.fixture
def sample_config():
    """Create a sample configuration for testing."""
    return AgentConfig()


@pytest.fixture
def mock_vscode_process():
    """Mock VS Code process for testing."""
    mock_process = Mock()
    mock_process.pid = 12345
    mock_process.name.return_value = "code"
    mock_process.is_running.return_value = True
    return mock_process


@pytest.fixture
def mock_ui_element():
    """Mock UI element for testing."""
    mock_element = Mock()
    mock_element.text = "Apply suggestion"
    mock_element.location = (100, 200)
    mock_element.size = (150, 30)
    mock_element.is_visible = True
    return mock_element