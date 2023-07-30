(function chapterNavigation() {
  document.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
      return;
    }
    if (window.search && window.search.hasFocus()) {
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        var nextButton = document.querySelector('a[rel="next"]');
        if (nextButton) {
          window.location.href = nextButton.href;
        }
        break;
      case 'ArrowLeft':
        e.preventDefault();
        var previousButton = document.querySelector('a[rel="prev"]');
        if (previousButton) {
          window.location.href = previousButton.href;
        }
        break;
    }
  });
})();
