
document.addEventListener("DOMContentLoaded", function() {
  
  function setupDarkModeImageSwitcher(imageClass, lightModeSrc, darkModeSrc) {
    var image = document.querySelector(imageClass);
    if (!image) return; 

    var darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function setDarkModeImage(mediaQuery) {
      image.src = mediaQuery.matches ? darkModeSrc : lightModeSrc;
    }

    darkModeMediaQuery.addListener(setDarkModeImage);
    setDarkModeImage(darkModeMediaQuery);
  }

  setupDarkModeImageSwitcher(
    '.image-9',
    'https://uploads-ssl.webflow.com/625593a881b8ebd169835ca5/650364790413cd1127e7e26b_Superlist%20logo.svg',
    'https://uploads-ssl.webflow.com/625593a881b8ebd169835ca5/654191f437e421437154f98b_logo%20light.svg',
  );

  setupDarkModeImageSwitcher(
    '.s23-logo-top',
    'https://uploads-ssl.webflow.com/625593a881b8ebd169835ca5/650364790413cd1127e7e26b_Superlist%20logo.svg',
    'https://uploads-ssl.webflow.com/625593a881b8ebd169835ca5/654191f437e421437154f98b_logo%20light.svg',
  );

  setupDarkModeImageSwitcher(
    '.s23-arrow-up',
    'https://uploads-ssl.webflow.com/625593a881b8ebd169835ca5/651324a35d0948418386f12b_Arrow.svg',
    'https://uploads-ssl.webflow.com/625593a881b8ebd169835ca5/654192b23fbb3726330d40b4_Arrow.svg',
  );
});

