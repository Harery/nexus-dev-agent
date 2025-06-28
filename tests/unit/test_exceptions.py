"""Unit tests for custom exceptions."""

import pytest

from nexus_dev_agent.exceptions import (
    NexusAgentError,
    ConfigurationError,
    ObservationError,
    ExecutionError,
    LearningError,
    SecurityError,
    UIElementError,
    PatternMatchError,
    ActionValidationError,
)


class TestExceptions:
    """Test cases for custom exceptions."""

    def test_base_exception(self):
        """Test base NexusAgentError exception."""
        error = NexusAgentError("Test error")
        assert str(error) == "Test error"
        assert isinstance(error, Exception)

    def test_configuration_error(self):
        """Test ConfigurationError exception."""
        error = ConfigurationError("Invalid config")
        assert isinstance(error, NexusAgentError)
        assert str(error) == "Invalid config"

    def test_observation_error(self):
        """Test ObservationError exception."""
        error = ObservationError("Observation failed")
        assert isinstance(error, NexusAgentError)

    def test_execution_error(self):
        """Test ExecutionError exception."""
        error = ExecutionError("Execution failed")
        assert isinstance(error, NexusAgentError)

    def test_learning_error(self):
        """Test LearningError exception."""
        error = LearningError("Learning failed")
        assert isinstance(error, NexusAgentError)

    def test_security_error(self):
        """Test SecurityError exception."""
        error = SecurityError("Security violation")
        assert isinstance(error, NexusAgentError)

    def test_ui_element_error(self):
        """Test UIElementError exception."""
        error = UIElementError("UI element not found")
        assert isinstance(error, ObservationError)
        assert isinstance(error, NexusAgentError)

    def test_pattern_match_error(self):
        """Test PatternMatchError exception."""
        error = PatternMatchError("Pattern not found")
        assert isinstance(error, LearningError)
        assert isinstance(error, NexusAgentError)

    def test_action_validation_error(self):
        """Test ActionValidationError exception."""
        error = ActionValidationError("Action validation failed")
        assert isinstance(error, ExecutionError)
        assert isinstance(error, NexusAgentError)