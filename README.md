<div align="center">
  
# 🔍 GitHub Profile Finder

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://gitprofilefind.dippanbhusal.tech)
[![GitHub Stars](https://img.shields.io/github/stars/KDippan/github-profile-finder?style=for-the-badge&logo=github)](https://github.com/KDippan/github-profile-finder/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/KDippan/github-profile-finder?style=for-the-badge&logo=github)](https://github.com/KDippan/github-profile-finder/network/members)
[![License](https://img.shields.io/github/license/KDippan/github-profile-finder?style=for-the-badge)](LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/KDippan/github-profile-finder?style=for-the-badge)](https://github.com/KDippan/github-profile-finder/issues)

**A modern, feature-rich GitHub Profile Finder with advanced search, live updates, and beautiful UI**

[🌐 Live Demo](https://gitprofilefind.dippanbhusal.tech) • [📖 Documentation](#documentation) • [🐛 Report Bug](https://github.com/KDippan/github-profile-finder/issues) • [✨ Request Feature](https://github.com/KDippan/github-profile-finder/issues)

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/GitHub_API-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub API" />

![GitHub Profile Finder Preview](https://raw.githubusercontent.com/KDippan/github-profile-finder/main/assets/preview.png)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🎯 Demo](#-demo)
- [🚀 Quick Start](#-quick-start)
- [📦 Installation](#-installation)
- [🎨 Screenshots](#-screenshots)
- [🛠️ Technologies](#️-technologies)
- [📚 API Reference](#-api-reference)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)
- [👨‍💻 Author](#-author)
- [💖 Support](#-support)
- [🌟 Acknowledgments](#-acknowledgments)

---

## ✨ Features

### 🔎 **Advanced Search**
- ⚡ **Live Search** with debouncing (400ms) for optimal performance
- 🔍 Real-time search as you type
- 📝 Recent searches with quick access chips (last 3 searches)
- 🎯 Smart error handling (404, rate limits, network errors)

### 👤 **Profile Display**
- 🖼️ High-quality avatar display
- 📊 Complete user statistics (repos, followers, following, gists)
- 📍 Location, company, blog, and social links
- 📅 Account creation date
- 📋 Bio and profile information

### 📦 **Repository Showcase**
- ⭐ Top 10 repositories display
- 🔄 Sort by stars, forks, or recent updates
- 🎨 Language color-coded badges (20+ languages)
- 📈 Star and fork counts with formatted numbers
- 📝 Repository descriptions with line clamping
- 🔗 Direct links to repositories

### 🎨 **Beautiful UI/UX**
- 🌓 **Dark/Light Mode** with system preference detection
- 💾 Theme persistence with localStorage
- 📱 Fully responsive design (mobile-first approach)
- ✨ Smooth animations and transitions
- 💀 Skeleton loading screens with shimmer effect
- 🎯 Clean, modern GitHub-inspired design
- 🎭 Glass-morphism effects

### 🚀 **Performance**
- ⚡ Debounced API calls to prevent rate limiting
- 💾 LocalStorage caching for recent searches
- 🎯 Optimized DOM manipulation
- 📦 Lightweight - No frameworks or dependencies
- 🌐 CDN-based resources (Font Awesome)
- 🔄 Efficient re-rendering

### 🔒 **Additional Features**
- 📋 Copy profile URL to clipboard
- 🔗 Share profiles on social media (native share API)
- 📊 Rate limit tracking and display
- ♿ Full accessibility with ARIA labels
- ⌨️ Keyboard shortcuts (Ctrl+K to focus search, Escape to clear)
- 🔙 Browser history support (back/forward buttons work)
- 🛡️ XSS protection with input sanitization
- 🔐 Secure external links (noopener noreferrer)

---

## 🎯 Demo

### 🌐 Live Website
**[https://gitprofilefind.dippanbhusal.tech](https://gitprofilefind.dippanbhusal.tech)**

Try searching for popular developers:
- `torvalds` (Linus Torvalds - Linux creator)
- `gaearon` (Dan Abramov - React core team)
- `tj` (TJ Holowaychuk - Express.js creator)
- `sindresorhus` (Sindre Sorhus - Prolific open source developer)
- `KDippan` (That's me! 😊)

---

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API calls
- Basic text editor (optional, for modifications)

### ⚡ One-Click Deploy

Deploy your own instance in seconds:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/KDippan/github-profile-finder)
[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/KDippan/github-profile-finder)
[![Deploy with GitHub Pages](https://img.shields.io/badge/Deploy%20to-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://github.com/KDippan/github-profile-finder#github-pages-deployment)

---

## 📦 Installation

### Option 1: Download ZIP (Easiest)
1. Click the green **"Code"** button above
2. Select **"Download ZIP"**
3. Extract the ZIP file to your desired location
4. Open `index.html` in your browser
5. Done! 🎉

### Option 2: Clone Repository (Recommended)
```bash
# Clone the repository
git clone https://github.com/KDippan/github-profile-finder.git

# Navigate to project directory
cd github-profile-finder

# Open in browser
# For Linux:
xdg-open index.html

# For macOS:
open index.html

# For Windows:
start index.html
```

### Option 3: Use with Live Server (Development)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if installed)
npx live-server

# Using PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

### GitHub Pages Deployment

**Step-by-step guide:**

1. **Fork this repository**
   - Click the "Fork" button at the top right

2. **Enable GitHub Pages**
   - Go to your fork's Settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select `main` branch
   - Click "Save"

3. **Access your site**
   - Your site will be live at: `https://yourusername.github.io/github-profile-finder/`
   - It may take a few minutes for the first deployment

4. **Custom Domain (Optional)**
   - Add a `CNAME` file with your domain
   - Configure your domain's DNS settings
   - Update the domain in GitHub Pages settings

---

## 🎨 Screenshots

<details>
<summary>📸 Click to expand and view all screenshots</summary>

<br>

### 🌞 Light Mode
![Light Mode - Home](https://via.placeholder.com/800x500/f6f8fa/24292f?text=Light+Mode+Home)

![Light Mode - Profile](https://via.placeholder.com/800x500/f6f8fa/24292f?text=Light+Mode+Profile)

### 🌙 Dark Mode
![Dark Mode - Home](https://via.placeholder.com/800x500/0d1117/c9d1d9?text=Dark+Mode+Home)

![Dark Mode - Profile](https://via.placeholder.com/800x500/0d1117/c9d1d9?text=Dark+Mode+Profile)

### 📱 Mobile Responsive
<div align="center">
<img src="https://via.placeholder.com/300x600/f6f8fa/24292f?text=Mobile+View" width="250" alt="Mobile View" />
<img src="https://via.placeholder.com/300x600/0d1117/c9d1d9?text=Mobile+Dark" width="250" alt="Mobile Dark" />
</div>

### ✨ Features in Action
![Search Results](https://via.placeholder.com/800x500/f6f8fa/24292f?text=Search+Results)

![Repository View](https://via.placeholder.com/800x500/f6f8fa/24292f?text=Repository+View)

![Error States](https://via.placeholder.com/800x500/f6f8fa/24292f?text=Error+Handling)

</details>

---

## 🛠️ Technologies

### Frontend Stack
- **HTML5** - Semantic and accessible markup
- **CSS3** - Modern styling with custom properties
- **Vanilla JavaScript (ES6+)** - No frameworks, pure performance

### APIs & Services
- **GitHub REST API v3** - User and repository data
- **Font Awesome 6.5.1** - Beautiful icons via CDN

### Key Techniques
- **Async/Await** - Modern asynchronous JavaScript
- **Debouncing** - Performance optimization for API calls
- **LocalStorage API** - Client-side data persistence
- **Fetch API** - HTTP requests to GitHub API
- **CSS Variables** - Dynamic theming
- **CSS Grid & Flexbox** - Responsive layouts
- **Media Queries** - Mobile-first responsive design

### Design Patterns
- Component-based architecture
- State management with JavaScript closures
- Event delegation for better performance
- Lazy loading for images
- Error boundary pattern

### Browser Support
| Browser | Version |
|---------|---------|
| ✅ Chrome | 90+ |
| ✅ Firefox | 88+ |
| ✅ Safari | 14+ |
| ✅ Edge | 90+ |
| ✅ Opera | 76+ |

---

## 📚 API Reference

### GitHub REST API v3

This project uses the **GitHub REST API (v3)** to fetch user and repository data [web:14].

#### Rate Limits
| Authentication | Requests per Hour |
|---------------|-------------------|
| Unauthenticated | 60 |
| Authenticated | 5,000 |

💡 **Tip:** The app displays remaining API calls when you're running low!

#### Endpoints Used

**1. Get User Profile**
```javascript
GET https://api.github.com/users/{username}

// Response includes: avatar, name, bio, location, company, 
// blog, twitter, repos count, followers, following, etc.
```

**2. Get User Repositories**
```javascript
GET https://api.github.com/users/{username}/repos
  ?sort=updated
  &per_page=100
  &type=owner

// Returns array of repositories with name, description,
// language, stars, forks, etc.
```

#### Optional: Increase Rate Limit with Authentication

To get 5,000 requests/hour instead of 60:

1. **Generate Personal Access Token**
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Click "Generate new token (classic)"
   - Name it (e.g., "GitHub Profile Finder")
   - No scopes needed for public data
   - Copy the token

2. **Add to script.js**
   ```javascript
   // In the fetchWithRateLimit function
   const response = await fetch(url, {
       headers: {
           'Accept': 'application/vnd.github.v3+json',
           'Authorization': 'token YOUR_TOKEN_HERE'
       }
   });
   ```

⚠️ **Security Warning:** 
- Never commit tokens to GitHub!
- Use environment variables in production
- Add `.env` to `.gitignore`

#### API Documentation
📖 Full docs: [https://docs.github.com/en/rest](https://docs.github.com/en/rest)

---

## 🤝 Contributing

Contributions make the open source community amazing! Any contributions you make are **greatly appreciated**! 🎉

### 🌟 How to Contribute

1. **Star this repository** ⭐
2. **Fork the Project**
3. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
4. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
5. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
6. **Open a Pull Request**

### 📋 Contribution Guidelines
- Read [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines
- Follow the [Code of Conduct](CODE_OF_CONDUCT.md)
- Write clear, concise commit messages
- Add comments for complex code
- Test your changes thoroughly
- Update documentation as needed

### 🎯 Good First Issues
New to open source? Look for issues labeled:
- [`good first issue`](https://github.com/KDippan/github-profile-finder/labels/good%20first%20issue)
- [`beginner`](https://github.com/KDippan/github-profile-finder/labels/beginner)
- [`help wanted`](https://github.com/KDippan/github-profile-finder/labels/help%20wanted)

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - Copyright (c) 2026 Dippan Bhusal
```

**TL;DR:** You can use, modify, and distribute this project freely. Just include the license!

---

## 👨‍💻 Author

<div align="center">

<img src="https://github.com/KDippan.png" width="100" style="border-radius: 50%;" alt="Dippan Bhusal" />

### **Dippan Bhusal**

Full-Stack Developer | Open Source Enthusiast | Tech Content Creator

[![GitHub](https://img.shields.io/badge/GitHub-@KDippan-181717?style=for-the-badge&logo=github)](https://github.com/KDippan)
[![Website](https://img.shields.io/badge/Website-dippanbhusal.tech-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://dippanbhusal.tech)
[![Instagram](https://img.shields.io/badge/Instagram-@dippan.bhusal-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/dippan.bhusal)
[![Email](https://img.shields.io/badge/Email-dippan.connect@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:dippan.connect@gmail.com)

*"Building cool stuff and sharing knowledge"*

</div>

---

## 💖 Support

If you find this project helpful, please consider supporting! Your support helps me create more awesome open-source projects.

<div align="center">

### ☕ Buy Me a Coffee

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Support%20My%20Work-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/dippanbhusal?new=1)

*Your coffee keeps the code flowing! ☕*

---

### ❤️ GitHub Sponsors

[![GitHub Sponsors](https://img.shields.io/badge/Sponsor%20on%20GitHub-❤️%20Support-EA4AAA?style=for-the-badge&logo=github-sponsors&logoColor=white)](https://github.com/sponsors/KDippan)

*Become a sponsor and get your name/logo here!*

---

### ⭐ Star this Repository

**Give this project a star if you like it!**

It helps others discover this project and motivates me to keep improving it.

[![Star History Chart](https://api.star-history.com/svg?repos=KDippan/github-profile-finder&type=Date)](https://star-history.com/#KDippan/github-profile-finder&Date)

</div>

---

## 🌟 Acknowledgments

Special thanks to:

- **[GitHub](https://github.com)** - For the amazing API
- **[GitHub REST API Documentation](https://docs.github.com/en/rest)** - Comprehensive and clear docs
- **[Font Awesome](https://fontawesome.com/)** - Beautiful icon library
- **[Shields.io](https://shields.io/)** - For awesome README badges
- **[Netlify](https://netlify.com)** & **[Vercel](https://vercel.com)** - Free hosting platforms
- **All Contributors** - Everyone who has contributed to this project

### Inspiration
Built with passion to solve the need for a modern, fast, and beautiful GitHub profile search tool with excellent user experience.

---

## 📈 Project Stats

![GitHub Repo Size](https://img.shields.io/github/repo-size/KDippan/github-profile-finder?style=flat-square&logo=github)
![GitHub Code Size](https://img.shields.io/github/languages/code-size/KDippan/github-profile-finder?style=flat-square&logo=github)
![GitHub Language Count](https://img.shields.io/github/languages/count/KDippan/github-profile-finder?style=flat-square&logo=github)
![GitHub Top Language](https://img.shields.io/github/languages/top/KDippan/github-profile-finder?style=flat-square&logo=javascript)
![GitHub Commit Activity](https://img.shields.io/github/commit-activity/m/KDippan/github-profile-finder?style=flat-square&logo=github)
![GitHub Last Commit](https://img.shields.io/github/last-commit/KDippan/github-profile-finder?style=flat-square&logo=github)
![Visitors](https://visitor-badge.laobi.icu/badge?page_id=KDippan.github-profile-finder)

---

## 🗺️ Roadmap

### ✅ Completed
- [x] Basic search functionality
- [x] User profile display with statistics
- [x] Repository showcase with sorting
- [x] Dark/Light theme toggle
- [x] Fully responsive design
- [x] Recent searches feature
- [x] Rate limit tracking
- [x] Copy/Share functionality
- [x] Keyboard shortcuts
- [x] Accessibility improvements

### 🚀 Upcoming Features
- [ ] User contribution graph visualization
- [ ] Repository language statistics with charts
- [ ] Export profile as PDF
- [ ] Compare two GitHub users side-by-side
- [ ] Advanced filters (language, stars, forks)
- [ ] Integration with GitHub GraphQL API v4
- [ ] Progressive Web App (PWA) support
- [ ] Offline mode with caching
- [ ] Multi-language support (i18n)
- [ ] GitHub Gist viewer
- [ ] Organization profile support
- [ ] Trending developers section

### 💡 Ideas Being Considered
- [ ] GitHub activity timeline
- [ ] Follower/Following network graph
- [ ] Repository contribution insights
- [ ] Custom profile themes
- [ ] Browser extension version

**Have a feature idea?** [Open an issue](https://github.com/KDippan/github-profile-finder/issues/new) and let's discuss!

---

## 🐛 Known Issues

Currently tracking issues on the [Issues page](https://github.com/KDippan/github-profile-finder/issues).

Found a bug? Please [report it](https://github.com/KDippan/github-profile-finder/issues/new?template=bug_report.md)!

---

## 📜 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes in each version.

### Latest Version: v1.0.0 (2026-01-03)
- 🎉 Initial release
- ✨ All core features implemented
- 📱 Fully responsive
- 🌓 Dark/Light mode
- ⚡ Performance optimized

---

## 💬 FAQ

<details>
<summary><b>Q: Do I need a GitHub account to use this?</b></summary>
<br>
No, you can search any public GitHub profile without an account. However, unauthenticated requests are limited to 60 per hour.
</details>

<details>
<summary><b>Q: Why do I see "Rate Limit Exceeded"?</b></summary>
<br>
GitHub limits unauthenticated requests to 60 per hour. To increase this to 5,000, add a Personal Access Token (see API Reference section).
</details>

<details>
<summary><b>Q: Can I use this for commercial projects?</b></summary>
<br>
Yes! This project is MIT licensed, which allows commercial use. Just include the license file.
</details>

<details>
<summary><b>Q: How do I deploy this to my own domain?</b></summary>
<br>
Simply upload the files to any web hosting service (Netlify, Vercel, GitHub Pages, etc.) and point your domain to it.
</details>

<details>
<summary><b>Q: Does this work offline?</b></summary>
<br>
The app needs internet to fetch data from GitHub's API. However, recent searches are cached locally. PWA support for offline mode is planned for future versions.
</details>

---

<div align="center">

## 🔥 Show some ❤️ by starring this repository!

**Made with ❤️ by [Dippan Bhusal](https://dippanbhusal.tech)**

**Happy Coding! 🚀**

---

[![GitHub followers](https://img.shields.io/github/followers/KDippan?style=social)](https://github.com/KDippan)
[![Twitter Follow](https://img.shields.io/twitter/follow/dippan_bhusal?style=social)](https://twitter.com/dippan_bhusal)

*If you have any questions or suggestions, feel free to reach out!*

</div>
