
document.addEventListener('DOMContentLoaded', function() {
    
  const slides = document.querySelectorAll('.s23-pitchdeck-slide');

  function checkSlideVisibility() {
      slides.forEach(slide => {
          const slideTop = slide.getBoundingClientRect().top;
          const slideBottom = slide.getBoundingClientRect().bottom;

          // Check if slide is within viewport by a margin of 100vh
          if (slideTop >= 0 && slideBottom <= window.innerHeight) {
              slide.style.opacity = '1';
          } else {
              slide.style.opacity = '0';
          }
      });
  }

  // Initial check
  checkSlideVisibility();

  // Listen for scroll events
  window.addEventListener('scroll', checkSlideVisibility);
  
  // Additionally, you can listen for resize events in case the viewport size changes
  window.addEventListener('resize', checkSlideVisibility);

});




document.addEventListener('DOMContentLoaded', function() {
    
  const slides = document.querySelectorAll('.s23-pitchdeck-slide');
  const slide1 = document.querySelector('#first-slide');
  let ticking = false; // for requestAnimationFrame

  function checkSlides() {
      slides.forEach(slide => {
          const slideTop = slide.getBoundingClientRect().top;
          const slideBottom = slide.getBoundingClientRect().bottom;

          if (slideTop >= 0 && slideBottom <= window.innerHeight) {
              slide.style.opacity = '1';
          } else {
              slide.style.opacity = '0';
          }
      });

      var topMargin = 350;
      var rect = slide1.getBoundingClientRect();
      if (rect.top < window.innerHeight - topMargin) {
          slide1.classList.add('pitch-slide-in-view');
      } else {
          slide1.classList.remove('pitch-slide-in-view');
      }

      ticking = false;
  }

  function onScroll() {
      if (!ticking) {
          window.requestAnimationFrame(() => {
              checkSlides();
              ticking = false;
          });
          ticking = true;
      }
  }

  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onScroll); // Might still be needed for some scenarios

  // Initial check
  checkSlides();

});



document.addEventListener("DOMContentLoaded", function() {

  const buttons = document.querySelectorAll('.s23-usecase-button');
  let currentIndex = 1;

  setInterval(() => {
    if (currentIndex >= buttons.length) {
      currentIndex = 0;
    }
    buttons[currentIndex].click();
    currentIndex++;
  }, 8000); 

});