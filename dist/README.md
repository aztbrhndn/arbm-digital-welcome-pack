# ARBM Digital Welcome Pack

A responsive, interactive slideshow presentation built with Reveal.js for Al Rajhi Bank Malaysia's employee onboarding.

## 🚀 Quick Start

### Development Server Options

**Option 1: Serve (Recommended)**

```bash
npm run serve
```

**Option 2: Alternative Development Servers**

````bash
# http-server
npm run http-server

Visit `http://localhost:8000` in your browser.

### Build and Deployment

```bash
# Build production version
npm run build

# Package for deployment with documentation
npm run package

# Complete deployment process
npm run deploy

# Full deployment with validation and archive
npm run deploy:full

# Validate deployment
npm run deploy:validate

# Test deployment locally
npm run deploy:test

# Create deployment archive
npm run deploy:zip
````

### Static Deployment

All files can be deployed directly to any web server or intranet. The build process creates an optimized `/dist` directory for deployment.

## 📁 Project Structure

```

arbm-digital-welcome-pack/
├── index.html # Main presentation file
├── css/
│ └── custom.css # Custom styles and ARBM branding
├── js/
│ └── custom.js # Custom JavaScript functionality
├── assets/
│ ├── images/ # Image files
│ └── icons/ # Icon files
├── scripts/
│ ├── build.js # Production build system
│ └── package.js # Deployment documentation generator
├── dist/ # Production build output
├── node_modules/ # Dependencies (Reveal.js, plugins)
├── package.json # Project configuration
└── README.md # This file

```

## 🎯 Features

- **Mobile-Responsive Design**: Optimized for desktop and mobile devices with touch navigation
- **Interactive Menu**: Slide-out navigation menu for easy section jumping
- **Matterport Integration**: 3D office tour embedding (placeholder ready)
- **ARBM Branding**: Custom theme with Al Rajhi Bank Malaysia colors
- **Progressive Loading**: External content loads progressively for better performance
- **Local Storage**: Presentation state persistence across sessions
- **Multi-Server Support**: Apache, IIS, Nginx configurations included
- **Deployment Validation**: Automated deployment validation system
- **Static Hosting**: No server-side processing required

## 📱 Navigation

### Desktop

- **Arrow Keys**: Navigate slides
- **ESC**: Toggle overview mode
- **M**: Open/close menu
- **F**: Toggle fullscreen
- **H**: Show help overlay
- **P**: Pause presentation

### Mobile

- **Swipe Left/Right**: Navigate horizontal slides
- **Swipe Up/Down**: Navigate vertical slides
- **Tap Menu Button**: Open navigation menu
- **Pinch to Zoom**: Zoom in/out of slides

## 🔧 Content Management

### Updating Slide Content

#### 1. Welcome Section

Edit the welcome slide in `index.html`:

```html
<section data-menu-title="Welcome">
  <h1>Welcome to ARBM</h1>
  <h2>Al Rajhi Bank Malaysia</h2>
  <p>Your Digital Welcome Pack</p>
</section>
```

#### 2. Matterport Tour

Replace the placeholder URL in `js/custom.js`:

```javascript
// Replace SAMPLE_MATTERPORT_ID with actual Matterport tour ID
src = "https://my.matterport.com/show/?m=YOUR_MATTERPORT_ID";
```

#### 3. Deals & Dining

Update deal cards in `index.html`:

```html
<div class="deal-card">
  <h3>Deal Title</h3>
  <p>Deal description</p>
  <small>Redemption instructions</small>
</div>
```

#### 4. Policies Section

Modify policy content in `index.html`:

```html
<div class="policy-section">
  <h3>Policy Title</h3>
  <p>Policy content...</p>
</div>
```

### Adding New Slides

1. Add a new `<section>` element with `data-menu-title` attribute:

```html
<section data-menu-title="New Section">
  <section>
    <h2>New Section Title</h2>
    <p>Content goes here...</p>
  </section>
</section>
```

2. Update the menu configuration in `js/custom.js` if needed.

### Customizing Styles

Edit `css/custom.css` to modify:

- **Colors**: Update CSS variables in `:root`
- **Fonts**: Change font-family declarations
- **Layout**: Modify grid and flexbox properties
- **Animations**: Add or modify CSS transitions

### Brand Colors

```css
:root {
  --arbm-primary: #1b4f72; /* Navy blue */
  --arbm-secondary: #2ecc71; /* Green */
  --arbm-accent: #f39c12; /* Orange */
  --arbm-dark: #2c3e50; /* Dark gray */
  --arbm-light: #ecf0f1; /* Light gray */
}
```

## 🖼️ Asset Management

### Images

- Place images in `assets/images/`
- Supported formats: PNG, JPG, SVG, GIF
- Recommended sizes: 1920x1080 for backgrounds, 400x300 for cards

### Icons

- Place icons in `assets/icons/`
- Use SVG format for scalability
- Include favicon.ico for browser tab icon

## 🔌 Plugins & Dependencies

### Reveal.js Plugins

- **reveal.js-menu**: Navigation menu
- **RevealMarkdown**: Markdown support
- **RevealHighlight**: Code syntax highlighting
- **RevealNotes**: Speaker notes

### Adding New Plugins

1. Install via npm: `npm install plugin-name`
2. Add script tag in `index.html`
3. Include in plugins array in `js/custom.js`

## 🌐 Browser Support

- **Chrome**: 70+
- **Firefox**: 65+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile Safari**: 12+
- **Chrome Mobile**: 70+

Optimized for corporate intranet environments.

## 📊 Analytics & Tracking

Basic analytics are logged to console. To add real analytics:

1. Include analytics script in `index.html`
2. Update tracking functions in `js/custom.js`:

```javascript
Reveal.addEventListener("slidechanged", function (event) {
  // Your analytics code here
  gtag("event", "slide_change", {
    slide_title: event.currentSlide.getAttribute("data-menu-title"),
  });
});
```

## 🚨 Troubleshooting

### Common Issues

**Presentation not loading**

- Check browser console for errors
- Ensure all files are in correct directory structure
- Verify web server is running

**Menu not appearing**

- Check if reveal.js-menu plugin is loaded
- Verify menu configuration in `js/custom.js`

**Matterport tour not loading**

- Replace placeholder URL with actual Matterport link
- Check iframe permissions and CORS settings
- Verify Matterport tour is public or accessible

**Mobile touch navigation not working**

- Ensure touch events are enabled in browser
- Check for JavaScript errors in console
- Verify touch event handlers in `js/custom.js`

### Performance Optimization

- **Images**: Compress images before adding to assets
- **Fonts**: Use web-safe fonts or load fonts asynchronously
- **Scripts**: Minimize custom JavaScript
- **Caching**: Enable browser caching for static assets

## 📦 Deployment

### Intranet Deployment

1. Copy all files to web server directory
2. Ensure proper file permissions
3. Configure web server to serve static files
4. Test on target devices and browsers

### Creating Distribution Package

```bash
# Create deployment package
npm run build
# This creates an optimized /dist directory ready for deployment

# Package with documentation
npm run package

# Create deployment archive
npm run deploy:zip
```

## 🔐 Security Considerations

- **Content Security Policy**: Configure CSP headers if needed
- **HTTPS**: Use HTTPS for external resources
- **Iframe Security**: Verify Matterport iframe sources
- **Input Validation**: Sanitize any user-generated content
- **Security Headers**: Configured for corporate intranet environments

## 📝 License

This project is proprietary to Al Rajhi Bank Malaysia. All rights reserved.

## 🆘 Support

For technical support or questions:

- **Developer**: Aizat
- **Project**: ARBM Digital Welcome Pack
- **Documentation**: This README file

## 🔄 Version History

- **v1.0.0**: Initial release with all core features
  - Welcome slide with ARBM branding
  - Office navigation with Matterport integration
  - Deals & dining section with card layout
  - Policies section with scrollable content
  - Mobile-responsive design
  - Touch navigation support
  - Menu-based navigation

## 📋 Content Update Checklist

When updating content, ensure:

- [ ] All links are working
- [ ] Images are optimized and loading
- [ ] Matterport URL is correct
- [ ] Text is proofread and formatted
- [ ] Mobile view is tested
- [ ] Navigation menu reflects changes
- [ ] Branding guidelines are followed
- [ ] Accessibility standards are met

---

_Last updated: [Current Date]_
_Project by: Aizat for Al Rajhi Bank Malaysia_

