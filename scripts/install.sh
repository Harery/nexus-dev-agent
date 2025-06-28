#!/bin/bash

# Nexus Dev Agent Installation Script
# This script installs Nexus Dev Agent on the system

set -e

echo "🚀 Installing Nexus Dev Agent..."

# Detect OS
OS="unknown"
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    OS="linux"
elif [[ "$OSTYPE" == "darwin"* ]]; then
    OS="macos"
elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
    OS="windows"
fi

echo "🖥️ Detected OS: $OS"

# Check Python installation
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3.8 or higher."
    exit 1
fi

# Check Python version
python_version=$(python3 --version 2>&1 | cut -d' ' -f2 | cut -d'.' -f1,2)
required_version="3.8"

if [ "$(printf '%s\n' "$required_version" "$python_version" | sort -V | head -n1)" != "$required_version" ]; then
    echo "❌ Python $required_version or higher is required. Found: $python_version"
    exit 1
fi

echo "✅ Python version check passed: $python_version"

# Install pip if not available
if ! command -v pip3 &> /dev/null; then
    echo "📦 Installing pip..."
    python3 -m ensurepip --upgrade
fi

# Install Nexus Dev Agent
echo "📚 Installing Nexus Dev Agent..."
pip3 install --user nexus-dev-agent

# Add user bin to PATH if not already there
USER_BIN="$HOME/.local/bin"
if [[ ":$PATH:" != *":$USER_BIN:"* ]]; then
    echo "🔧 Adding $USER_BIN to PATH..."
    
    if [[ "$OS" == "macos" ]]; then
        echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
        echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bash_profile
    else
        echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
    fi
    
    export PATH="$HOME/.local/bin:$PATH"
fi

# Verify installation
if command -v nexus-agent &> /dev/null; then
    echo "✅ Installation successful!"
    echo ""
    echo "🎉 Nexus Dev Agent is now installed!"
    echo ""
    echo "Next steps:"
    echo "1. Configure the agent: nexus-config"
    echo "2. Start the agent: nexus-agent start"
    echo ""
    echo "📖 Documentation: https://harery.github.io/nexus-dev-agent"
    echo "🐛 Issues: https://github.com/Harery/nexus-dev-agent/issues"
else
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi