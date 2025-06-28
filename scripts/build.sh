#!/bin/bash

# Nexus Dev Agent Build Script
# This script builds the distribution packages

set -e

echo "🏗️ Building Nexus Dev Agent distribution packages..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf build/ dist/ *.egg-info/

# Install build dependencies
echo "📦 Installing build dependencies..."
pip install --upgrade build twine

# Build source and wheel distributions
echo "🔨 Building distributions..."
python -m build

# Check the built packages
echo "🔍 Checking built packages..."
twine check dist/*

# Display build results
echo ""
echo "✅ Build complete! Generated files:"
ls -la dist/

echo ""
echo "📦 To upload to PyPI:"
echo "   twine upload dist/*"
echo ""
echo "🧪 To test upload to TestPyPI:"
echo "   twine upload --repository testpypi dist/*"
echo ""