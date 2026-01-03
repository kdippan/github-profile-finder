// ========================================
// Configuration & Constants
// ========================================

const API_BASE = 'https://api.github.com';
const DEBOUNCE_DELAY = 400;
const MAX_RECENT_SEARCHES = 3;
const CACHE_EXPIRY = 5 * 60 * 1000; // 5 minutes

const LANGUAGE_COLORS = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Ruby: '#701516',
    Go: '#00ADD8',
    Rust: '#dea584',
    PHP: '#4F5D95',
    'C++': '#f34b7d',
    C: '#555555',
    'C#': '#178600',
    Swift: '#ffac45',
    Kotlin: '#A97BFF',
    Dart: '#00B4AB',
    Vue: '#41b883',
    React: '#61dafb',
    Shell: '#89e051',
    Jupyter: '#DA5B0B',
};

// ========================================
// DOM Elements
// ========================================

const elements = {
    searchInput: document.getElementById('search-input'),
    searchBtn: document.getElementById('search-btn'),
    clearBtn: document.getElementById('clear-btn'),
    themeToggle: document.getElementById('theme-toggle'),
    recentSearches: document.getElementById('recent-searches'),
    recentChips: document.getElementById('recent-chips'),
    emptyState: document.getElementById('empty-state'),
    loadingContainer: document.getElementById('loading-container'),
    errorContainer: document.getElementById('error-container'),
    profileContainer: document.getElementById('profile-container'),
    rateLimitInfo: document.getElementById('rate-limit-info'),
    rateLimitText: document.getElementById('rate-limit-text'),
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toast-message'),
    errorTitle: document.getElementById('error-title'),
    errorMessage: document.getElementById('error-message'),
    errorIcon: document.getElementById('error-icon-el'),
    retryBtn: document.getElementById('retry-btn'),
    repoSort: document.getElementById('repo-sort'),
};

// Profile elements
const profileElements = {
    avatar: document.getElementById('user-avatar'),
    name: document.getElementById('user-name'),
    username: document.getElementById('user-username'),
    bio: document.getElementById('user-bio'),
    location: document.getElementById('user-location'),
    company: document.getElementById('user-company'),
    blog: document.getElementById('user-blog'),
    twitter: document.getElementById('user-twitter'),
    joined: document.getElementById('user-joined'),
    repos: document.getElementById('stat-repos'),
    followers: document.getElementById('stat-followers'),
    following: document.getElementById('stat-following'),
    gists: document.getElementById('stat-gists'),
    reposContainer: document.getElementById('repos-container'),
    noRepos: document.getElementById('no-repos'),
    copyUrlBtn: document.getElementById('copy-url-btn'),
    shareBtn: document.getElementById('share-btn'),
    githubLinkBtn: document.getElementById('github-link-btn'),
};

// ========================================
// State Management
// ========================================

let currentUser = null;
let currentRepos = [];
let lastSearchQuery = '';
let searchTimeout = null;

// ========================================
// Utility Functions
// ========================================

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function getLanguageColor(language) {
    return LANGUAGE_COLORS[language] || '#858585';
}

function showToast(message, duration = 3000) {
    elements.toastMessage.textContent = message;
    elements.toast.classList.remove('hidden');
    
    setTimeout(() => {
        elements.toast.classList.add('hidden');
    }, duration);
}

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('Copied to clipboard!');
        }).catch(() => {
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast('Copied to clipboard!');
    } catch (err) {
        showToast('Failed to copy');
    }
    
    document.body.removeChild(textArea);
}

// ========================================
// Theme Management
// ========================================

function initTheme() {
    const savedTheme = localStorage.getItem('github-finder-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('github-finder-theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = elements.themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// ========================================
// Local Storage Management
// ========================================

function saveToRecentSearches(username, userData) {
    let recent = JSON.parse(localStorage.getItem('github-finder-recent') || '[]');
    
    recent = recent.filter(item => item.username.toLowerCase() !== username.toLowerCase());
    
    recent.unshift({
        username: userData.login,
        avatar: userData.avatar_url,
        name: userData.name || userData.login,
        timestamp: Date.now(),
    });
    
    recent = recent.slice(0, MAX_RECENT_SEARCHES);
    localStorage.setItem('github-finder-recent', JSON.stringify(recent));
    
    displayRecentSearches();
}

function getRecentSearches() {
    return JSON.parse(localStorage.getItem('github-finder-recent') || '[]');
}

function removeFromRecentSearches(username) {
    let recent = getRecentSearches();
    recent = recent.filter(item => item.username.toLowerCase() !== username.toLowerCase());
    localStorage.setItem('github-finder-recent', JSON.stringify(recent));
    displayRecentSearches();
}

function displayRecentSearches() {
    const recent = getRecentSearches();
    
    if (recent.length === 0) {
        elements.recentSearches.classList.add('hidden');
        return;
    }
    
    elements.recentSearches.classList.remove('hidden');
    elements.recentChips.innerHTML = '';
    
    recent.forEach(item => {
        const chip = document.createElement('div');
        chip.className = 'recent-chip';
        chip.innerHTML = `
            <img src="${item.avatar}" alt="${item.username}">
            <span>${item.username}</span>
            <button class="remove-chip" aria-label="Remove from recent">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        chip.addEventListener('click', (e) => {
            if (!e.target.closest('.remove-chip')) {
                elements.searchInput.value = item.username;
                searchUser(item.username);
            }
        });
        
        chip.querySelector('.remove-chip').addEventListener('click', (e) => {
            e.stopPropagation();
            removeFromRecentSearches(item.username);
        });
        
        elements.recentChips.appendChild(chip);
    });
}

// ========================================
// API Functions
// ========================================

async function fetchWithRateLimit(url) {
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/vnd.github.v3+json',
        }
    });
    
    const remaining = response.headers.get('X-RateLimit-Remaining');
    const reset = response.headers.get('X-RateLimit-Reset');
    
    if (remaining !== null) {
        updateRateLimitInfo(parseInt(remaining), parseInt(reset));
    }
    
    return response;
}

function updateRateLimitInfo(remaining, resetTimestamp) {
    if (remaining <= 10) {
        const resetDate = new Date(resetTimestamp * 1000);
        const now = new Date();
        const minutesLeft = Math.ceil((resetDate - now) / 60000);
        
        elements.rateLimitText.textContent = 
            `${remaining} API calls remaining. Resets in ${minutesLeft} minutes.`;
        elements.rateLimitInfo.classList.remove('hidden');
    } else {
        elements.rateLimitInfo.classList.add('hidden');
    }
}

async function fetchUserProfile(username) {
    try {
        const response = await fetchWithRateLimit(`${API_BASE}/users/${username}`);
        
        if (response.status === 404) {
            throw new Error('USER_NOT_FOUND');
        }
        
        if (response.status === 403) {
            throw new Error('RATE_LIMIT');
        }
        
        if (!response.ok) {
            throw new Error('API_ERROR');
        }
        
        return await response.json();
    } catch (error) {
        throw error;
    }
}

async function fetchUserRepos(username) {
    try {
        const response = await fetchWithRateLimit(
            `${API_BASE}/users/${username}/repos?sort=stars&per_page=30&type=owner`
        );
        
        if (!response.ok) {
            return [];
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching repositories:', error);
        return [];
    }
}

// ========================================
// UI State Management
// ========================================

function showLoading() {
    elements.emptyState.classList.add('hidden');
    elements.errorContainer.classList.add('hidden');
    elements.profileContainer.classList.add('hidden');
    elements.loadingContainer.classList.remove('hidden');
}

function showError(type) {
    elements.emptyState.classList.add('hidden');
    elements.loadingContainer.classList.add('hidden');
    elements.profileContainer.classList.add('hidden');
    elements.errorContainer.classList.remove('hidden');
    
    let title, message, icon;
    
    switch (type) {
        case 'USER_NOT_FOUND':
            title = 'User Not Found';
            message = 'The GitHub user you\'re looking for doesn\'t exist. Please check the username and try again.';
            icon = 'fas fa-user-slash';
            break;
        case 'RATE_LIMIT':
            title = 'Rate Limit Exceeded';
            message = 'You\'ve made too many requests. Please wait a few minutes before trying again.';
            icon = 'fas fa-exclamation-triangle';
            break;
        case 'NETWORK_ERROR':
            title = 'Connection Failed';
            message = 'Unable to connect to GitHub. Please check your internet connection and try again.';
            icon = 'fas fa-wifi';
            break;
        default:
            title = 'Something Went Wrong';
            message = 'An unexpected error occurred. Please try again later.';
            icon = 'fas fa-exclamation-circle';
    }
    
    elements.errorTitle.textContent = title;
    elements.errorMessage.textContent = message;
    elements.errorIcon.className = icon;
}

function showProfile() {
    elements.emptyState.classList.add('hidden');
    elements.loadingContainer.classList.add('hidden');
    elements.errorContainer.classList.add('hidden');
    elements.profileContainer.classList.remove('hidden');
}

// ========================================
// Profile Display Functions
// ========================================

function displayProfile(userData) {
    currentUser = userData;
    
    // Avatar
    profileElements.avatar.src = userData.avatar_url;
    profileElements.avatar.alt = userData.login;
    
    // Basic info
    profileElements.name.textContent = userData.name || userData.login;
    profileElements.username.textContent = `@${userData.login}`;
    
    // Bio
    if (userData.bio) {
        profileElements.bio.textContent = userData.bio;
        profileElements.bio.style.display = 'block';
    } else {
        profileElements.bio.style.display = 'none';
    }
    
    // Meta information
    displayMetaInfo('location', userData.location, 'text');
    displayMetaInfo('company', userData.company, 'text');
    displayMetaInfo('blog', userData.blog, 'link', userData.blog);
    displayMetaInfo('twitter', userData.twitter_username, 'link', 
        `https://twitter.com/${userData.twitter_username}`, `@${userData.twitter_username}`);
    
    // Joined date
    profileElements.joined.querySelector('span').textContent = 
        `Joined ${formatDate(userData.created_at)}`;
    
    // Statistics
    profileElements.repos.textContent = formatNumber(userData.public_repos);
    profileElements.followers.textContent = formatNumber(userData.followers);
    profileElements.following.textContent = formatNumber(userData.following);
    profileElements.gists.textContent = formatNumber(userData.public_gists);
    
    // Action buttons
    profileElements.githubLinkBtn.href = userData.html_url;
    
    showProfile();
    saveToRecentSearches(userData.login, userData);
}

function displayMetaInfo(elementId, value, type, href = null, displayText = null) {
    const element = profileElements[elementId];
    
    if (value) {
        element.classList.remove('hidden');
        if (type === 'text') {
            element.querySelector('span').textContent = value;
        } else if (type === 'link') {
            const link = element.querySelector('a');
            link.href = href;
            link.textContent = displayText || value;
        }
    } else {
        element.classList.add('hidden');
    }
}

function displayRepositories(repos) {
    currentRepos = repos;
    
    if (repos.length === 0) {
        profileElements.reposContainer.innerHTML = '';
        profileElements.noRepos.classList.remove('hidden');
        return;
    }
    
    profileElements.noRepos.classList.add('hidden');
    sortAndDisplayRepos(elements.repoSort.value);
}

function sortAndDisplayRepos(sortBy) {
    let sortedRepos = [...currentRepos];
    
    switch (sortBy) {
        case 'stars':
            sortedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
            break;
        case 'forks':
            sortedRepos.sort((a, b) => b.forks_count - a.forks_count);
            break;
        case 'updated':
            sortedRepos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
            break;
    }
    
    const displayRepos = sortedRepos.slice(0, 10);
    
    profileElements.reposContainer.innerHTML = '';
    
    displayRepos.forEach(repo => {
        const repoCard = createRepoCard(repo);
        profileElements.reposContainer.appendChild(repoCard);
    });
}

function createRepoCard(repo) {
    const card = document.createElement('div');
    card.className = 'repo-card';
    
    const description = repo.description 
        ? `<p class="repo-description">${repo.description}</p>` 
        : '';
    
    const language = repo.language 
        ? `
            <div class="repo-language">
                <span class="language-dot" style="background-color: ${getLanguageColor(repo.language)}"></span>
                <span>${repo.language}</span>
            </div>
        ` 
        : '';
    
    card.innerHTML = `
        <div class="repo-header">
            <a href="${repo.html_url}" class="repo-name" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-book"></i>
                ${repo.name}
            </a>
        </div>
        ${description}
        <div class="repo-footer">
            ${language}
            <div class="repo-stat">
                <i class="fas fa-star"></i>
                <span>${formatNumber(repo.stargazers_count)}</span>
            </div>
            <div class="repo-stat">
                <i class="fas fa-code-branch"></i>
                <span>${formatNumber(repo.forks_count)}</span>
            </div>
        </div>
    `;
    
    return card;
}

// ========================================
// Search Functions
// ========================================

async function searchUser(username) {
    if (!username || username.trim() === '') {
        return;
    }
    
    lastSearchQuery = username.trim();
    showLoading();
    
    try {
        const userData = await fetchUserProfile(username);
        const repos = await fetchUserRepos(username);
        
        displayProfile(userData);
        displayRepositories(repos);
    } catch (error) {
        if (error.message === 'USER_NOT_FOUND') {
            showError('USER_NOT_FOUND');
        } else if (error.message === 'RATE_LIMIT') {
            showError('RATE_LIMIT');
        } else if (error.name === 'TypeError') {
            showError('NETWORK_ERROR');
        } else {
            showError('GENERIC');
        }
    }
}

const debouncedSearch = debounce((username) => {
    if (username.length >= 2) {
        searchUser(username);
    }
}, DEBOUNCE_DELAY);

// ========================================
// Event Listeners
// ========================================

function initEventListeners() {
    // Search input
    elements.searchInput.addEventListener('input', (e) => {
        const value = e.target.value.trim();
        
        if (value) {
            elements.clearBtn.classList.remove('hidden');
        } else {
            elements.clearBtn.classList.add('hidden');
        }
        
        debouncedSearch(value);
    });
    
    elements.searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const value = e.target.value.trim();
            if (value) {
                searchUser(value);
            }
        }
    });
    
    // Search button
    elements.searchBtn.addEventListener('click', () => {
        const value = elements.searchInput.value.trim();
        if (value) {
            searchUser(value);
        }
    });
    
    // Clear button
    elements.clearBtn.addEventListener('click', () => {
        elements.searchInput.value = '';
        elements.clearBtn.classList.add('hidden');
        elements.searchInput.focus();
    });
    
    // Theme toggle
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    // Retry button
    elements.retryBtn.addEventListener('click', () => {
        if (lastSearchQuery) {
            searchUser(lastSearchQuery);
        }
    });
    
    // Repository sort
    elements.repoSort.addEventListener('change', (e) => {
        sortAndDisplayRepos(e.target.value);
    });
    
    // Copy URL button
    profileElements.copyUrlBtn.addEventListener('click', () => {
        if (currentUser) {
            copyToClipboard(currentUser.html_url);
        }
    });
    
    // Share button
    profileElements.shareBtn.addEventListener('click', () => {
        if (currentUser) {
            if (navigator.share) {
                navigator.share({
                    title: `${currentUser.name || currentUser.login} on GitHub`,
                    text: `Check out ${currentUser.login}'s GitHub profile`,
                    url: currentUser.html_url,
                }).catch(() => {
                    copyToClipboard(currentUser.html_url);
                });
            } else {
                copyToClipboard(currentUser.html_url);
            }
        }
    });
    
    // System theme change detection
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('github-finder-theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateThemeIcon(newTheme);
        }
    });
}

// ========================================
// Initialization
// ========================================

function init() {
    initTheme();
    initEventListeners();
    displayRecentSearches();
    
    // Check for URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('user');
    
    if (username) {
        elements.searchInput.value = username;
        searchUser(username);
    }
}

// Start the application
document.addEventListener('DOMContentLoaded', init);
