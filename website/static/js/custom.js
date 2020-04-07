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
})
