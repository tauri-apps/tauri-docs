// Thanks David Walsh: https://davidwalsh.name/detect-ad-blocker

export async function checkAdBlocker() {
  let isBlocked

  async function tryRequest() {
    try {
      return fetch(
        new Request(
          'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
          {
            method: 'HEAD',
            mode: 'no-cors',
          }
        )
      )
        .then(function (response) {
          isBlocked = false
          return isBlocked
        })
        .catch(function (e) {
          isBlocked = true
          return isBlocked
        })
    } catch (error) {
      isBlocked = true
      return isBlocked
    }
  }
  return isBlocked !== undefined ? isBlocked : await tryRequest()
}
