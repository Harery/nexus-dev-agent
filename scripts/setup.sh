#!/bin/bash

# Nexus Dev Agent Setup Script
# This script sets up the development environment for Nexus Dev Agent

set -e

echo "🚀 Setting up Nexus Dev Agent development environment..."

# Check Python version
python_version=$(python3 --version 2>&1 | cut -d' ' -f2 | cut -d'.' -f1,2)
required_version="3.8"

if [ "$(printf '%s\n' "$required_version" "$python_version" | sort -V | head -n1)" != "$required_version" ]; then
    echo "❌ Python $required_version or higher is required. Found: $python_version"
    exit 1
fi

echo "✅ Python version check passed: $python_version"

# Create virtual environment
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Upgrade pip
echo "⬆️ Upgrading pip..."
pip install --upgrade pip

# Install development dependencies
echo "📚 Installing development dependencies..."
pip install -e ".[dev]"

# Install pre-commit hooks
echo "🪝 Installing pre-commit hooks..."
pre-commit install

# Create necessary directories
echo "📁 Creating project directories..."
mkdir -p logs data config docs/_static docs/_templates

# Copy example configuration
if [ ! -f "config/example.yaml" ]; then
    echo "⚙️ Creating example configuration..."
    cat > config/example.yaml << EOF
# Nexus Dev Agent Example Configuration
observation:
  monitor_copilot: true
  monitor_terminal: true
  polling_interval: 0.5
  ui_detection_sensitivity: "medium"

action:
  auto_execute: true
  confirmation_timeout: 30.0
  action_delay: 0.1
  retry_attempts: 3

security:
  require_confirmation: true
  audit_logging: true
  sandbox_mode: true
  permission_level: "standard"

log_level: "INFO"
data_dir: "~/.nexus-dev-agent"
EOF
fi

# Run initial tests
echo "🧪 Running initial tests..."
pytest tests/unit/ -v

# Check code quality
echo "🔍 Running code quality checks..."
black --check src/ tests/ || echo "⚠️ Code formatting issues found. Run 'make format' to fix."
flake8 src/ tests/ || echo "⚠️ Linting issues found."
mypy src/ || echo "⚠️ Type checking issues found."

echo ""
echo "🎉 Setup complete! Next steps:"
echo ""
echo "1. Activate the virtual environment:"
echo "   source venv/bin/activate"
echo ""
echo "2. Configure the agent:"
echo "   nexus-config"
echo ""
echo "3. Start the agent:"
echo "   nexus-agent start"
echo ""
echo "4. Run tests:"
echo "   make test"
echo ""
echo "5. View available commands:"
echo "   make help"
echo ""
echo "📖 Documentation: https://harery.github.io/nexus-dev-agent"
echo "🐛 Issues: https://github.com/Harery/nexus-dev-agent/issues"
echo ""