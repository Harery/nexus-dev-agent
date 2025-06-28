#!/bin/bash

# Nexus Dev Agent Release Script
# This script automates the release process

set -e

# Check if version is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <version>"
    echo "Example: $0 1.1.0"
    exit 1
fi

VERSION=$1
CURRENT_BRANCH=$(git branch --show-current)

echo "🚀 Starting release process for version $VERSION..."

# Verify we're on main branch
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "❌ Must be on main branch to create a release. Current branch: $CURRENT_BRANCH"
    exit 1
fi

# Check if working directory is clean
if [ -n "$(git status --porcelain)" ]; then
    echo "❌ Working directory is not clean. Please commit or stash changes."
    git status --short
    exit 1
fi

# Update version in pyproject.toml
echo "📝 Updating version in pyproject.toml..."
sed -i.bak "s/version = \".*\"/version = \"$VERSION\"/" pyproject.toml
rm pyproject.toml.bak

# Update version in __init__.py
echo "📝 Updating version in __init__.py..."
sed -i.bak "s/__version__ = \".*\"/__version__ = \"$VERSION\"/" src/nexus_dev_agent/__init__.py
rm src/nexus_dev_agent/__init__.py.bak

# Update CHANGELOG.md
echo "📝 Updating CHANGELOG.md..."
TODAY=$(date +%Y-%m-%d)
sed -i.bak "s/## \[Unreleased\]/## [Unreleased]\n\n## [$VERSION] - $TODAY/" CHANGELOG.md
rm CHANGELOG.md.bak

# Run tests
echo "🧪 Running tests..."
pytest

# Run code quality checks
echo "🔍 Running code quality checks..."
make lint

# Build packages
echo "🏗️ Building packages..."
./scripts/build.sh

# Commit changes
echo "💾 Committing version bump..."
git add pyproject.toml src/nexus_dev_agent/__init__.py CHANGELOG.md
git commit -m "chore: bump version to $VERSION"

# Create and push tag
echo "🏷️ Creating and pushing tag..."
git tag -a "v$VERSION" -m "Release version $VERSION"
git push origin main
git push origin "v$VERSION"

echo ""
echo "✅ Release $VERSION created successfully!"
echo ""
echo "Next steps:"
echo "1. GitHub Actions will automatically build and publish to PyPI"
echo "2. Create release notes on GitHub: https://github.com/Harery/nexus-dev-agent/releases"
echo "3. Update documentation if needed"
echo ""