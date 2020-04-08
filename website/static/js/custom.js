document.addEventListener('DOMContentLoaded', function() {
  var DARK_THEME = 'dark'
  var LIGHT_THEME = 'light'
  var theme = localStorage.getItem('theme') || DARK_THEME

  document
    .querySelector('.contrast-toggle')
    .addEventListener('click', function() {
      var theme = localStorage.getItem('theme')
      var newTheme = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME
      switchTheme(newTheme, theme)
    })

  function switchTheme(theme, oldTheme) {
    localStorage.setItem('theme', theme)
    document.body.classList.toggle(theme)
    document.body.classList.toggle(oldTheme)
  }

  document.body.classList.toggle(theme)

  // The debounce function receives updateScroll as a parameter
  const debounce = (fn) => {
    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;
    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
      // If the frame variable has been defined, clear it now, and queue for next frame
      if (frame) {
        cancelAnimationFrame(frame);
      }
      // Queue our function call for the next frame
      frame = requestAnimationFrame(() => {
        // Call our function and pass any params we received
        fn(...params);
      });
    }
  };

  // Reads out the scroll position and stores it in the data attribute
  // so we can use it in our stylesheets
  const storeScroll = () => {
    if (document.documentElement.dataset.scroll !== window.scrollY) {
      if (window.scrollY > document.documentElement.dataset.scroll) {
        document.documentElement.dataset.show = false;
      } else {
        document.documentElement.dataset.show = true;
      }
    }
    document.documentElement.dataset.scroll = window.scrollY;
  }
  // Listen for new scroll events, here we debounce our `storeScroll` function
  document.addEventListener('scroll', debounce(updateScroll), { passive: true });
  // Update scroll position for first time
  updateScroll();
})
