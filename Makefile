.PHONY: help install install-dev test test-unit test-integration test-coverage lint format clean docs build release

# Default target
help:
	@echo "Nexus Dev Agent - Development Commands"
	@echo "======================================"
	@echo ""
	@echo "Setup Commands:"
	@echo "  install      Install production dependencies"
	@echo "  install-dev  Install development dependencies"
	@echo ""
	@echo "Testing Commands:"
	@echo "  test         Run all tests"
	@echo "  test-unit    Run unit tests only"
	@echo "  test-integration  Run integration tests only"
	@echo "  test-coverage     Run tests with coverage report"
	@echo ""
	@echo "Code Quality Commands:"
	@echo "  lint         Run linting checks"
	@echo "  format       Format code with black and isort"
	@echo "  type-check   Run type checking with mypy"
	@echo "  security     Run security checks"
	@echo ""
	@echo "Documentation Commands:"
	@echo "  docs         Build documentation"
	@echo "  docs-serve   Serve documentation locally"
	@echo ""
	@echo "Build Commands:"
	@echo "  build        Build distribution packages"
	@echo "  clean        Clean build artifacts"
	@echo ""
	@echo "Release Commands:"
	@echo "  release      Create a new release"

# Installation
install:
	pip install -e .

install-dev:
	pip install -e ".[dev]"
	pre-commit install

# Testing
test:
	pytest

test-unit:
	pytest tests/unit/

test-integration:
	pytest tests/integration/

test-coverage:
	pytest --cov=src/nexus_dev_agent --cov-report=html --cov-report=term

# Code Quality
lint:
	flake8 src/ tests/
	mypy src/
	bandit -r src/

format:
	black src/ tests/
	isort src/ tests/

type-check:
	mypy src/

security:
	bandit -r src/
	safety check

# Documentation
docs:
	cd docs && make html

docs-serve:
	cd docs && make livehtml

# Build
build:
	python -m build

clean:
	rm -rf build/
	rm -rf dist/
	rm -rf *.egg-info/
	rm -rf .pytest_cache/
	rm -rf .coverage
	rm -rf htmlcov/
	find . -type d -name __pycache__ -delete
	find . -type f -name "*.pyc" -delete

# Release
release:
	@echo "Creating new release..."
	@echo "1. Update version in pyproject.toml"
	@echo "2. Update CHANGELOG.md"
	@echo "3. Commit changes"
	@echo "4. Create and push tag"
	@echo "5. Build and upload to PyPI"
	@echo ""
	@echo "Run 'make build' to build distribution packages"

# Development helpers
run-agent:
	python -m nexus_dev_agent.cli start

configure:
	python -m nexus_dev_agent.cli configure-agent

status:
	python -m nexus_dev_agent.cli status

# Docker commands (if needed)
docker-build:
	docker build -t nexus-dev-agent .

docker-run:
	docker run -it --rm nexus-dev-agent

# CI/CD helpers
ci-test:
	pytest --cov=src/nexus_dev_agent --cov-report=xml

ci-lint:
	flake8 src/ tests/ --format=github
	mypy src/ --junit-xml=mypy-results.xml

ci-security:
	bandit -r src/ -f json -o bandit-results.json
	safety check --json --output safety-results.json