"""Nexus Dev Agent - Autonomous development assistant for VS Code and terminal automation.

This package provides intelligent automation capabilities for VS Code's Copilot panel
and integrated terminal, eliminating repetitive manual interventions and enhancing
developer productivity through continuous learning and adaptive behavior.
"""

__version__ = "1.0.0"
__author__ = "Nexus Dev Agent Team"
__email__ = "team@nexus-dev-agent.com"
__license__ = "MIT"

from .agent import NexusAgent
from .config import AgentConfig
from .exceptions import NexusAgentError

__all__ = ["NexusAgent", "AgentConfig", "NexusAgentError"]