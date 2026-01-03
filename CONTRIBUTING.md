# Contributing to GitHub Profile Finder

First off, thank you for considering contributing to GitHub Profile Finder! 🎉

It's people like you that make this project such a great tool. We welcome contributions from everyone, whether it's:

- 🐛 Reporting a bug
- 💬 Discussing the current state of the code
- 📝 Submitting a fix
- 🚀 Proposing new features
- 📖 Improving documentation

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to dippan.connect@gmail.com.

## 🚀 Getting Started

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- Git installed on your machine
- A GitHub account
- A code editor (VS Code, Sublime Text, etc.)

### Setting Up Your Development Environment

1. **Fork the repository**
   - Click the 'Fork' button at the top right of this page
   - This creates a copy in your GitHub account

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/github-profile-finder.git
   cd github-profile-finder
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/KDippan/github-profile-finder.git
   ```

4. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Make your changes and test thoroughly**
   - Open `index.html` in your browser
   - Test all features you modified
   - Test on different browsers if possible

6. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: brief description of your changes"
   ```

7. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Open a Pull Request**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Fill out the PR template

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check [existing issues](https://github.com/KDippan/github-profile-finder/issues) to avoid duplicates.

**When creating a bug report, include:**

- **Clear title**: Descriptive and specific
- **Description**: Detailed explanation of the issue
- **Steps to Reproduce**: Step-by-step instructions
- **Expected Behavior**: What you expected to happen
- **Actual Behavior**: What actually happened
- **Screenshots**: If applicable
- **Environment**: Browser, OS, version, etc.

**Bug Report Template:**

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - OS: [e.g. Windows 10, macOS 12.0, Ubuntu 22.04]
 - Browser: [e.g. Chrome 120, Firefox 115, Safari 16]
 - Device: [e.g. Desktop, iPhone 14, Samsung Galaxy S23]

**Additional context**
Add any other context about the problem here.
```

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues.

**When creating an enhancement suggestion, include:**

- **Clear title**: Descriptive title
- **Detailed description**: Explain the enhancement in detail
- **Use cases**: Why is this enhancement useful?
- **Examples**: Provide examples or mockups if possible
- **Alternatives**: Any alternative solutions you've considered

**Feature Request Template:**

```markdown
**Is your feature request related to a problem? Please describe.**
A clear description of what the problem is. Ex. I'm always frustrated when [...]

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
A clear description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.
```

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:

- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `beginner` - Simple issues to get started
- `documentation` - Improve or add documentation

### Pull Requests

**Follow these steps:**

1. **Update documentation** for any changed functionality
2. **Test thoroughly** before submitting
3. **Follow the coding style** used throughout the project
4. **One feature per PR** - Keep PRs focused and manageable
5. **Update the README** if you add features
6. **Add comments** for complex code
7. **Test on multiple browsers** if possible

## 🎨 Style Guidelines

### JavaScript Style Guide

**General Rules:**
- Use ES6+ syntax
- Use `const` and `let`, avoid `var`
- Use arrow functions where appropriate
- Use template literals for string interpolation
- Add JSDoc comments for functions
- Keep functions small and focused (< 50 lines)
- Use meaningful variable and function names

**Naming Conventions:**
- Variables: `camelCase`
- Constants: `UPPER_SNAKE_CASE`
- Functions: `camelCase`
- Classes: `PascalCase`

**Example:**

```javascript
/**
 * Format large numbers with K/M suffixes
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Usage
const followers = 1500;
console.log(formatNumber(followers)); // "1.5K"
```

**Avoid:**
```javascript
// Bad - unclear variable names
function fn(n) {
    if (n > 1000000) return (n / 1000000).toFixed(1) + 'M';
    if (n > 1000) return (n / 1000).toFixed(1) + 'K';
    return n.toString();
}
```

### CSS Style Guide

**General Rules:**
- Use CSS custom properties (variables) for theming
- Follow BEM-like naming convention
- Keep selectors specific but not overly nested (max 3 levels)
- Group related properties together
- Add comments for complex sections
- Mobile-first responsive design

**Property Order:**
1. Positioning
2. Box model
3. Typography
4. Visual
5. Animation

**Example:**

```css
/* ========================================
   Button Component
   ======================================== */

.btn {
    /* Positioning */
    position: relative;
    display: inline-flex;
    
    /* Box model */
    padding: 12px 24px;
    margin: 0;
    
    /* Typography */
    font-size: 16px;
    font-weight: 600;
    
    /* Visual */
    background: var(--accent);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    
    /* Animation */
    transition: var(--transition);
    cursor: pointer;
}

.btn--primary {
    background: var(--accent);
}

.btn--primary:hover {
    background: var(--accent-hover);
    transform: translateY(-2px);
}
```

**Avoid:**
```css
/* Bad - no organization */
.btn {
    color: white;
    cursor: pointer;
    background: blue;
    padding: 10px;
    font-size: 14px;
    border-radius: 5px;
}
```

### HTML Style Guide

**General Rules:**
- Use semantic HTML5 elements
- Include ARIA labels for accessibility
- Keep proper indentation (2 or 4 spaces consistently)
- Add meaningful alt text for images
- Use lowercase for tags and attributes
- Close all tags properly

**Example:**

```html
<!-- Good -->
<button 
    id="theme-toggle" 
    class="theme-toggle" 
    aria-label="Toggle dark/light theme"
    type="button"
>
    <i class="fas fa-moon"></i>
</button>

<!-- Bad -->
<button id=theme-toggle class=theme-toggle>
<i class="fas fa-moon"></i>
</button>
```

## 📝 Commit Messages

Follow these conventions for clear commit history:

### Format
```
Type: Brief description (50 chars or less)

More detailed explanation if necessary. Wrap at 72 characters.
Focus on WHY you made the change, not just WHAT changed.

- Bullet points are okay
- Use imperative mood: "Add feature" not "Added feature"
- Reference issues: "Fixes #123" or "Closes #456"
```

### Types
- `Add:` New feature or functionality
- `Fix:` Bug fix
- `Update:` Update existing feature or content
- `Remove:` Remove feature/file/code
- `Refactor:` Code refactoring without functionality change
- `Style:` Formatting, missing semicolons, whitespace
- `Docs:` Documentation only changes
- `Test:` Adding or updating tests
- `Chore:` Maintenance tasks, dependencies

### Examples

**Good commits:**
```
Add: Dark mode toggle functionality

Implemented theme switching with localStorage persistence
and system preference detection. Users can now switch between
light and dark themes using the button in the header.

- Added theme toggle button with icon
- Created theme switching logic
- Stored user preference in localStorage
- Added system preference detection

Fixes #42
```

```
Fix: Search input clear button not showing

The clear button wasn't appearing when text was entered due to
incorrect class toggle logic. Fixed by updating the display
logic in the input event handler.

Fixes #78
```

```
Update: Improve mobile responsiveness

Enhanced mobile layout for devices under 768px width.
Repository cards now stack vertically on mobile devices.
```

**Bad commits:**
```
fixed stuff
```

```
changes
```

```
updated files
```

## 🔄 Pull Request Process

### Before Submitting

- [ ] Test your changes thoroughly
- [ ] Update documentation (README, comments, etc.)
- [ ] Follow the code style guidelines
- [ ] Ensure no console errors or warnings
- [ ] Test on multiple browsers if possible
- [ ] Check for accessibility issues
- [ ] Make sure your code works on mobile

### PR Checklist

1. **Title**: Clear and descriptive
2. **Description**: Explain what and why
3. **Link issues**: Use "Fixes #123" or "Closes #456"
4. **Screenshots**: Add before/after if UI changes
5. **Testing**: Describe how you tested
6. **Breaking changes**: Mention if any

### Pull Request Template

```markdown
## Description
Brief description of what this PR does and why.

## Type of Change
- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📝 Documentation update
- [ ] 🎨 Style/UI update
- [ ] ♻️ Code refactoring

## How Has This Been Tested?
Describe the tests you ran and on which browsers/devices.

- [ ] Tested on Chrome (Desktop)
- [ ] Tested on Firefox (Desktop)
- [ ] Tested on Safari (Desktop)
- [ ] Tested on Mobile Chrome
- [ ] Tested on Mobile Safari
- [ ] Added unit tests (if applicable)

## Screenshots (if applicable)
Add screenshots or GIFs to help explain your changes.

### Before
[Screenshot]

### After
[Screenshot]

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings or errors
- [ ] I have tested on multiple browsers
- [ ] Any dependent changes have been merged and published

## Related Issues
Fixes #(issue number)
Closes #(issue number)

## Additional Notes
Any additional information or context about the PR.
```

### Review Process

1. **Maintainer reviews** your PR
2. **Address feedback** if requested
3. **Make changes** in your feature branch
4. **Push updates** - they'll appear in the PR automatically
5. **Wait for approval**
6. **PR gets merged!** 🎉

## 🎯 Development Workflow

```bash
# 1. Sync with upstream (do this often!)
git fetch upstream
git checkout main
git merge upstream/main

# 2. Create feature branch
git checkout -b feature/amazing-feature

# 3. Make changes and test
# Edit files...
# Test in browser...

# 4. Commit with descriptive message
git add .
git commit -m "Add: amazing feature with cool functionality"

# 5. Push to your fork
git push origin feature/amazing-feature

# 6. Create Pull Request on GitHub
# Go to your fork and click "New Pull Request"
```

## ❓ Questions?

Feel free to ask questions! You can:

- 📧 Email: [dippan.connect@gmail.com](mailto:dippan.connect@gmail.com)
- 💬 Open an issue with the `question` label
- 📱 Instagram: [@dippan.bhusal](https://instagram.com/dippan.bhusal)
- 🌐 Website: [dippanbhusal.tech](https://dippanbhusal.tech)

## 🏆 Recognition

Contributors will be:
- Listed in the README.md
- Credited in release notes
- Added to the Contributors page (coming soon)
- Receive a shoutout on social media (if desired)

## 💡 Tips for Success

1. **Start small** - Fix a typo, improve documentation
2. **Ask questions** - No question is too small
3. **Be patient** - Reviews take time
4. **Be respectful** - We're all learning
5. **Have fun!** - Enjoy the process 🎉

## 🙏 Thank You!

Your contributions, no matter how small, make a huge difference. Thank you for taking the time to contribute! 🎉

Every contribution helps make this project better for everyone.

---

**Happy Contributing! 🚀**

Made with ❤️ by [Dippan Bhusal](https://dippanbhusal.tech)
