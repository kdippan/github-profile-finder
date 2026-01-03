# APK Build Workflow Documentation

## Overview

This document explains how the GitHub Profile Finder is automatically converted into an Android APK using GitHub Actions.

## Workflow: Build and Release APK

**Location:** `.github/workflows/build-and-release-apk.yml`

### Purpose

This workflow automatically builds an Android APK from the Progressive Web App (PWA) using Trusted Web Activity (TWA) technology. The APK wraps the web application in a native Android container, allowing users to install and use the app like a native Android application.

### Triggers

The workflow runs on:

1. **Push to main branch** - Automatically builds when code is pushed to the main branch
2. **Tag creation** (v*) - Creates a release when version tags are pushed (e.g., v1.0.0, v2.1.0)
3. **Manual dispatch** - Can be triggered manually from the GitHub Actions tab

### Configuration

#### App Details
- **App Name:** GitHub Profile Finder
- **Package Name:** tech.dippanbhusal.gitprofilefinder
- **Host URL:** https://gitprofilefind.dippanbhusal.tech
- **Icon URL:** https://gitprofilefind.dippanbhusal.tech/assets/icon-512x512.png

#### PWA Settings
- **Theme Color:** #0969da (GitHub blue)
- **Background Color:** #0d1117 (Dark background)
- **Start URL:** / (Root path)
- **Display Mode:** standalone (Full-screen without browser UI)
- **Orientation:** portrait (Mobile-optimized)

### How It Works

1. **Checkout:** The workflow checks out the repository code
2. **Build APK:** Uses the `sangatdesai/release-apk@V1.0` action to:
   - Generate Android project files
   - Configure the TWA with the provided settings
   - Build the APK using Gradle
   - Sign the APK (if keys are provided)
3. **Release:** The APK is automatically uploaded to GitHub Releases

### GitHub Actions Secrets

The workflow uses the following secrets:

- `GITHUB_TOKEN` - Automatically provided by GitHub for authentication

### Optional: Adding APK Signing

To sign the APK for production release, add these secrets to your repository:

1. Go to Settings → Secrets and variables → Actions
2. Add the following secrets:
   - `KEYSTORE_FILE` - Base64 encoded keystore file
   - `KEYSTORE_PASSWORD` - Keystore password
   - `KEY_ALIAS` - Key alias
   - `KEY_PASSWORD` - Key password

### Downloading the APK

Once the workflow completes:

1. Go to the repository's [Releases page](https://github.com/KDippan/github-profile-finder/releases)
2. Download the latest `app-release.apk` file
3. Install on your Android device

### Requirements

- Android 5.0 (API level 21) or higher
- Internet connection to access the web app
- "Install from Unknown Sources" enabled (for manual installation)

### Troubleshooting

#### Workflow fails to build
- Check the Actions tab for error logs
- Ensure the host URL is accessible
- Verify icon URL returns a valid image

#### APK won't install
- Enable "Install from Unknown Sources" in Android settings
- Ensure you're on Android 5.0 or higher
- Try uninstalling any previous version first

#### App shows blank screen
- Check internet connection
- Verify the host URL is correct and accessible
- Clear app cache and data

### Technical Details

**Trusted Web Activity (TWA):**
- TWA is a way to open web content in a full-screen Android app
- Uses Chrome Custom Tabs under the hood
- Provides a native app experience for PWAs
- No browser UI elements visible
- Can be published to Google Play Store

**Manifest Integration:**
- The workflow reads configuration from `manifest.json`
- Icons and app metadata are automatically configured
- PWA features like service workers work seamlessly

### Future Enhancements

Possible improvements for the workflow:

- [ ] Add automated Play Store publishing
- [ ] Include automated versioning
- [ ] Add APK signing for production releases
- [ ] Generate different APK variants (debug/release)
- [ ] Add automated testing before building
- [ ] Include changelog in release notes

### Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Trusted Web Activity Guide](https://developers.google.com/web/android/trusted-web-activity)
- [PWA Documentation](https://web.dev/progressive-web-apps/)

### Support

For issues or questions:
- Open an issue on [GitHub](https://github.com/KDippan/github-profile-finder/issues)
- Contact: dippan.connect@gmail.com
