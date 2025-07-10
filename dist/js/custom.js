// ARBM Digital Welcome Pack - Custom JavaScript

// Wait for DOM to be ready before initializing Reveal.js
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Reveal.js after DOM is ready
  initializeReveal();
});

function initializeReveal() {
  // Initialize Reveal.js with custom configuration
  Reveal.initialize({
    // Display presentation control arrows
    controls: true,

    // Help the user learn the controls by providing hints
    controlsTutorial: true,

    // Determines where controls appear
    controlsLayout: "bottom-right",

    // Display a presentation progress bar
    progress: true,

    // Display the page number of the current slide
    slideNumber: "c/t",

    // Add the current slide number to the URL hash
    hash: true,

    // Start with 1 for the hash rather than 0
    hashOneBasedIndex: false,

    // Flags if we should monitor the hash and change slides accordingly
    respondToHashChanges: true,

    // Push each slide change to the browser history
    history: true,

    // Enable keyboard shortcuts for navigation
    keyboard: true,

    // Enable the slide overview mode
    overview: true,

    // Disables the default reveal.js slide layout
    disableLayout: false,

    // Vertical centering of slides
    center: true,

    // Enables touch navigation on devices with touch input
    touch: true,

    // Loop the presentation
    loop: false,

    // Change the presentation direction to be RTL
    rtl: false,

    // Randomizes the order of slides each time the presentation loads
    shuffle: false,

    // Turns fragments on and off globally
    fragments: true,

    // Flags whether to include the current fragment in the URL
    fragmentInURL: false,

    // Flags if the presentation is running in an embedded mode
    embedded: false,

    // Flags if we should show a help overlay when the questionmark key is pressed
    help: true,

    // Flags if speaker notes should be visible to all viewers
    showNotes: false,

    // Global override for autoplaying embedded media (video/audio/iframe)
    autoPlayMedia: null,

    // Global override for preloading lazy-loaded iframes
    preloadIframes: null,

    // Number of milliseconds between automatically proceeding to the next slide
    autoSlide: 0,

    // Stop auto-sliding after user input
    autoSlideStoppable: true,

    // Use this method for navigation when auto-sliding
    autoSlideMethod: null,

    // Specify the average time in seconds that you think you will spend presenting each slide
    defaultTiming: null,

    // Enable slide navigation via mouse wheel
    mouseWheel: false,

    // Apply a 3D roll to links on hover
    rollingLinks: false,

    // Hides the address bar on mobile devices
    hideAddressBar: true,

    // Opens links in an iframe preview overlay
    previewLinks: false,

    // Transition style
    transition: "slide", // none/fade/slide/convex/concave/zoom

    // Transition speed
    transitionSpeed: "default", // default/fast/slow

    // Transition style for full page slide backgrounds
    backgroundTransition: "fade", // none/fade/slide/convex/concave/zoom

    // Number of slides away from the current that are visible
    viewDistance: 3,

    // Number of slides away from the current that are visible on mobile devices
    mobileViewDistance: 2,

    // Parallax background image
    parallaxBackgroundImage: "", // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"

    // Parallax background size
    parallaxBackgroundSize: "", // CSS syntax, e.g. "2100px 900px"

    // Number of pixels to move the parallax background per slide
    parallaxBackgroundHorizontal: null,
    parallaxBackgroundVertical: null,

    // The display mode that will be used to show slides
    display: "block",

    // The "normal" size of the presentation, aspect ratio will be preserved
    // width: 1280,
    // height: 720,
    width: 960,

    // Factor of the display size that should remain empty around the content
    margin: 0.04,

    // Bounds for smallest/largest possible scale to apply to content
    minScale: 0.2,
    maxScale: 2.0,

    // Menu plugin configuration
    menu: {
      // Specifies which side of the presentation the menu will be shown
      side: "left",

      // Specifies the width of the menu
      width: "normal",

      // Animation effect for the menu
      effect: "slide",

      // Add slide numbers to the titles in the slide list
      numbers: false,

      // Specifies which slide elements will be used for generating the slide titles
      titleSelector: "h1, h2, h3, h4, h5, h6",

      // If slides do not have a matching title, use the beginning of the text content as the title
      useTextContentForMissingTitles: false,

      // Hide slides from the menu that do not have a title
      hideMissingTitles: false,

      // Add markers to the slide titles to indicate the progress through the presentation
      markers: true,

      // Specify custom panels to be included in the menu
      custom: false,

      // Specify the themes that will be available in the themes menu panel
      themes: [
        { name: "Black", theme: "lib/reveal.js/dist/theme/black.css" },
        { name: "White", theme: "lib/reveal.js/dist/theme/white.css" },
        { name: "League", theme: "lib/reveal.js/dist/theme/league.css" },
        { name: "Sky", theme: "lib/reveal.js/dist/theme/sky.css" },
        { name: "Beige", theme: "lib/reveal.js/dist/theme/beige.css" },
        { name: "Simple", theme: "lib/reveal.js/dist/theme/simple.css" },
        { name: "Serif", theme: "lib/reveal.js/dist/theme/serif.css" },
        { name: "Blood", theme: "lib/reveal.js/dist/theme/blood.css" },
        { name: "Night", theme: "lib/reveal.js/dist/theme/night.css" },
        { name: "Moon", theme: "lib/reveal.js/dist/theme/moon.css" },
        {
          name: "Solarized",
          theme: "lib/reveal.js/dist/theme/solarized.css",
        },
      ],

      // Specify the path to the default theme files
      themesPath: "lib/reveal.js/dist/theme/",

      // Specify which transitions menu options to make available
      transitions: true,

      // Adds a menu button to the slides to open the menu panel
      openButton: true,

      // If true allows the slide number in the presentation to open the menu panel
      openSlideNumber: false,

      // If true allows the user to open and navigate the menu using the keyboard
      keyboard: true,

      // By default the menu will close when navigating the menu away from it
      sticky: false,

      // If true allows the menu to open when the 'm' key is pressed
      autoOpen: true,

      // If true the menu will be closed when a slide is navigated to
      delayInit: false,

      // If true the menu will be closed when the ESC key is pressed
      openOnInit: false,

      // By default the menu will load it's own font-awesome library icons
      loadIcons: true,
    },

    // Simplemenu plugin configuration
    simplemenu: {
      menuclass: "menu",
      activeclass: "active",
      selectby: "data-name",
      flat: true,
      scale: 0.67,
      barhtml: {
        header: "<div class='menubar'><ul class='menu'></ul></div>",
        footer: ""
      }
    },

    // Plugin initialization
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealMenu, Simplemenu],
  });
}

// Custom JavaScript for enhanced functionality
document.addEventListener("DOMContentLoaded", function () {
  // Add loading animation
  const loadingDiv = document.createElement("div");
  loadingDiv.innerHTML = '<div class="loading"></div>';
  loadingDiv.style.position = "fixed";
  loadingDiv.style.top = "50%";
  loadingDiv.style.left = "50%";
  loadingDiv.style.transform = "translate(-50%, -50%)";
  loadingDiv.style.zIndex = "9999";
  loadingDiv.id = "loading-indicator";
  document.body.appendChild(loadingDiv);

  // Remove loading animation after Reveal.js is ready
  Reveal.addEventListener("ready", function () {
    const loading = document.getElementById("loading-indicator");
    if (loading) {
      loading.remove();
    }
  });
});

// Touch/swipe support for mobile devices
if ("ontouchstart" in window) {
  // Add touch-specific styles
  document.documentElement.classList.add("touch-device");

  // Enhanced touch navigation
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  document.addEventListener(
    "touchstart",
    function (e) {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    },
    false
  );

  document.addEventListener(
    "touchend",
    function (e) {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    },
    false
  );

  function handleSwipe() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    const minSwipeDistance = 50;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
          // Swipe right - previous slide
          Reveal.prev();
        } else {
          // Swipe left - next slide
          Reveal.next();
        }
      }
    } else {
      if (Math.abs(deltaY) > minSwipeDistance) {
        if (deltaY > 0) {
          // Swipe down - previous vertical slide
          Reveal.up();
        } else {
          // Swipe up - next vertical slide
          Reveal.down();
        }
      }
    }
  }
}

// Keyboard shortcuts
document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "h":
      // Toggle help overlay
      Reveal.toggleHelp();
      break;
    case "o":
      // Toggle overview
      Reveal.toggleOverview();
      break;
    case "p":
      // Toggle pause
      Reveal.togglePause();
      break;
    case "f":
      // Toggle fullscreen
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen();
      }
      break;
  }
});

// Custom navigation indicators
Reveal.addEventListener("slidechanged", function (event) {
  // Update progress indicator
  const progress = (event.indexh + 1) / Reveal.getTotalSlides();
  document.documentElement.style.setProperty(
    "--slide-progress",
    `${progress * 100}%`
  );

  // Update page title
  const slideTitle =
    event.currentSlide.getAttribute("data-menu-title") ||
    "ARBM Digital Welcome Pack";
  document.title = `${slideTitle} - ARBM Digital Welcome Pack`;
});

// Matterport tour loading function
function loadMatterportTour() {
  const matterportPlaceholder = document.querySelector(
    ".matterport-placeholder"
  );
  if (matterportPlaceholder) {
    // Show loading state
    matterportPlaceholder.innerHTML = `
            <div class="matterport-info">
                <div class="loading"></div>
                <p>Loading 3D Tour...</p>
            </div>
        `;

    // Simulate loading delay (replace with actual Matterport URL)
    setTimeout(() => {
      matterportPlaceholder.innerHTML = `
                <iframe 
                    src="https://my.matterport.com/show/?m=SAMPLE_MATTERPORT_ID" 
                    width="100%" 
                    height="100%" 
                    frameborder="0" 
                    allowfullscreen 
                    allow="vr"
                    style="border-radius: 12px;">
                    <p>Your browser doesn't support iframes. Please visit the Matterport tour directly.</p>
                </iframe>
            `;
    }, 1500);
  }
}

// Lazy loading for Matterport iframe
function loadMatterport() {
  const matterportPlaceholder = document.querySelector(
    ".matterport-placeholder"
  );
  if (matterportPlaceholder && !matterportPlaceholder.querySelector("iframe")) {
    // Auto-load tour when slide becomes visible
    loadMatterportTour();
  }
}

// Load Matterport when Office Navigation slide becomes visible
Reveal.addEventListener("slidechanged", function (event) {
  if (event.currentSlide.closest('[data-menu-title="Office Navigation"]')) {
    loadMatterport();
  }
});

// Analytics tracking (placeholder)
Reveal.addEventListener("slidechanged", function (event) {
  // Track slide views
  console.log("Slide changed:", {
    section: event.currentSlide.getAttribute("data-menu-title"),
    slide: event.indexh,
    timestamp: new Date().toISOString(),
  });
});

// Auto-save presentation state
Reveal.addEventListener("slidechanged", function (event) {
  localStorage.setItem(
    "arbm-presentation-state",
    JSON.stringify({
      slide: event.indexh,
      timestamp: new Date().toISOString(),
    })
  );
});

// Restore presentation state on load
Reveal.addEventListener("ready", function () {
  const savedState = localStorage.getItem("arbm-presentation-state");
  if (savedState) {
    const state = JSON.parse(savedState);
    // Optionally navigate to last viewed slide
    // Reveal.slide(state.slide);
  }
});

// Error handling
window.addEventListener("error", function (e) {
  console.error("ARBM Presentation Error:", e.error);
});

// Performance monitoring
if ("performance" in window) {
  window.addEventListener("load", function () {
    const loadTime =
      performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log("Presentation load time:", loadTime + "ms");
  });
}

