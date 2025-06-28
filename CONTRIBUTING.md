# Contributing to Nexus Dev Agent

Thank you for your interest in contributing to Nexus Dev Agent! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Python 3.8 or higher
- VS Code 1.70 or higher
- Git
- GitHub account

### Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/nexus-dev-agent.git
   cd nexus-dev-agent
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install development dependencies**
   ```bash
   pip install -r requirements-dev.txt
   ```

4. **Install pre-commit hooks**
   ```bash
   pre-commit install
   ```

5. **Run tests to ensure everything works**
   ```bash
   python -m pytest
   ```

## 🎯 How to Contribute

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected vs actual behavior**
- **Environment details** (OS, Python version, VS Code version)
- **Screenshots or logs** if applicable

Use the bug report template:

```markdown
**Bug Description**
A clear description of the bug.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What you expected to happen.

**Environment**
- OS: [e.g., Windows 11, macOS 12.0, Ubuntu 20.04]
- Python Version: [e.g., 3.9.7]
- VS Code Version: [e.g., 1.74.0]
- Nexus Dev Agent Version: [e.g., 1.2.0]
```

### Suggesting Features

Feature requests are welcome! Please:

- **Check existing feature requests** to avoid duplicates
- **Provide clear use cases** and benefits
- **Consider implementation complexity**
- **Be open to discussion** and feedback

### Code Contributions

#### Branch Naming Convention

- `feature/description` - New features
- `bugfix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `test/description` - Test improvements

#### Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat(observer): add support for new Copilot prompt patterns
fix(executor): resolve click coordinate calculation issue
docs(readme): update installation instructions
test(learning): add unit tests for pattern recognition
```

#### Code Style

We use the following tools to maintain code quality:

- **Black** for code formatting
- **isort** for import sorting
- **flake8** for linting
- **mypy** for type checking

Run before committing:
```bash
# Format code
black .
isort .

# Check linting
flake8 .

# Type checking
mypy .
```

#### Testing Guidelines

- **Write tests** for new features and bug fixes
- **Maintain test coverage** above 90%
- **Use descriptive test names** that explain what is being tested
- **Follow the AAA pattern**: Arrange, Act, Assert

Test structure:
```python
def test_should_detect_copilot_prompt_when_suggestion_available():
    # Arrange
    observer = AgentObserver()
    mock_ui_element = create_mock_copilot_prompt()
    
    # Act
    result = observer.detect_prompt(mock_ui_element)
    
    # Assert
    assert result.is_detected
    assert result.prompt_type == "copilot_suggestion"
```

#### Documentation

- **Update documentation** for new features
- **Include docstrings** for all public functions and classes
- **Add type hints** for function parameters and return values
- **Update README** if necessary

Docstring format:
```python
def detect_prompt(self, ui_element: UIElement) -> PromptResult:
    """Detect actionable prompts in UI elements.
    
    Args:
        ui_element: The UI element to analyze for prompts.
        
    Returns:
        PromptResult containing detection status and prompt details.
        
    Raises:
        UIElementError: If the UI element is invalid or inaccessible.
    """
```

## 🔍 Pull Request Process

1. **Create a feature branch** from `main`
2. **Make your changes** following the guidelines above
3. **Add or update tests** as needed
4. **Update documentation** if required
5. **Ensure all tests pass** and code quality checks succeed
6. **Create a pull request** with a clear title and description

### Pull Request Template

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring
- [ ] Other (please describe)

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing completed

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests pass locally
- [ ] No breaking changes (or clearly documented)
```

## 🏗️ Project Structure

```
nexus-dev-agent/
├── src/
│   ├── agent/
│   │   ├── observer.py      # UI/Terminal monitoring
│   │   ├── executor.py      # Action execution
│   │   ├── learning.py      # Pattern learning
│   │   └── repository.py    # Action storage
│   ├── ui/
│   │   ├── dashboard.py     # User interface
│   │   └── config.py        # Configuration UI
│   └── utils/
│       ├── logging.py       # Logging utilities
│       └── security.py      # Security helpers
├── tests/
│   ├── unit/               # Unit tests
│   ├── integration/        # Integration tests
│   └── performance/        # Performance tests
├── docs/                   # Documentation
├── scripts/               # Utility scripts
└── config/                # Configuration files
```

## 🎖️ Recognition

Contributors will be recognized in:

- **README.md** contributors section
- **Release notes** for significant contributions
- **GitHub contributors** page

## 📞 Getting Help

- **GitHub Discussions** for questions and ideas
- **Discord** for real-time chat (link in README)
- **Email** for private inquiries

## 📋 Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold this code.

---

Thank you for contributing to Nexus Dev Agent! 🚀