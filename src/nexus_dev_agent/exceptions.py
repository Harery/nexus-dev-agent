"""Custom exceptions for Nexus Dev Agent."""


class NexusAgentError(Exception):
    """Base exception for all Nexus Dev Agent errors."""

    pass


class ConfigurationError(NexusAgentError):
    """Raised when there's an error in agent configuration."""

    pass


class ObservationError(NexusAgentError):
    """Raised when there's an error in UI/terminal observation."""

    pass


class ExecutionError(NexusAgentError):
    """Raised when there's an error in action execution."""

    pass


class LearningError(NexusAgentError):
    """Raised when there's an error in the learning system."""

    pass


class SecurityError(NexusAgentError):
    """Raised when there's a security-related error."""

    pass


class UIElementError(ObservationError):
    """Raised when UI element is invalid or inaccessible."""

    pass


class PatternMatchError(LearningError):
    """Raised when pattern matching fails."""

    pass


class ActionValidationError(ExecutionError):
    """Raised when action validation fails."""

    pass