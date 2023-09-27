
// ------------------------------------------------
// A. Call functions on scroll
// ------------------------------------------------

document.addEventListener('scroll', function() {

  // slowerApp();
  firstSlideReveal();
  darkSectionReveal();
  laundryListReveal();
  hugeDownloadReveal();

});

// ------------------------------------------------
// B. Adds some paralax to the app
// ------------------------------------------------

function slowerApp() {

  var app = document.querySelector('.s23-app');
  var scrolled = window.scrollY;
  
  var offset = scrolled * 0.1;
  app.style.transform = 'translate3d(0,' + offset + 'px, 0)';
}

// ------------------------------------------------
// C. Revels the first slide
// ------------------------------------------------

function firstSlideReveal() {

  const firstSlide = document.querySelector('.s23-slide-first');
  const innerSection = firstSlide.querySelector('.s23-pitch-right-1');
  const innerSectionImage = innerSection.querySelector('.s23-first-image');
  const hero = document.querySelector('.s23-hero');
  
  if (firstSlide) {
  	let firstSlidePosition = firstSlide.parentNode.getBoundingClientRect().top;
    let deviceWidth = window.innerWidth;
    
    let distance = deviceWidth > 480 ? 400 : 150; 
		let width = deviceWidth > 480 ? '95%' : '90%';
		let height = deviceWidth > 480 ? '90vh' : '90vh';
		let borderRadius = deviceWidth > 480 ? '80px' : '40px'
    let margintop = deviceWidth > 480 ? '0' : '30px'
    
    if (firstSlidePosition <= distance) {
      firstSlide.style.width = width;
      firstSlide.style.height = height;
      firstSlide.style.borderRadius = borderRadius;
      firstSlide.style.marginTop = margintop;

      innerSection.style.backgroundColor = '#F84F39';
      innerSectionImage.style.opacity = '1';

      hero.style.backgroundColor = '#ffffff';
    } else {
      firstSlide.style.width = '100%';
      firstSlide.style.height = '100vh';
      firstSlide.style.borderRadius = '0px';
      firstSlide.style.marginTop = '0px';

      innerSection.style.backgroundColor = 'transparent';
      innerSectionImage.style.opacity = '0';

      hero.style.backgroundColor = '#f3f2fa';
    }
  }
}

// ------------------------------------------------
// D. Revels the dark mode section
// ------------------------------------------------

function darkSectionReveal() {

  const darkModeParent = document.querySelector('.s23-dark-mode'); 
  const darkModeChild = document.querySelector('.s23-video-section');
  
  if (darkModeParent && darkModeChild) {
    let darkModeParentPosition = darkModeParent.getBoundingClientRect().top;
    
    if (darkModeParentPosition <= 0) {
      darkModeChild.classList.add('darkModeFullScreen');
    } else {
      darkModeChild.classList.remove('darkModeFullScreen');
    }
  }
}

// ------------------------------------------------
// E. Revels the laundry list
// ------------------------------------------------

function laundryListReveal() {

  const laundryList = document.querySelector('.s23-laundry-list-container');
  
  if (laundryList) {
	  let distance = laundryList.getBoundingClientRect().top;
    
    if (distance < 150) {
    	laundryList.style.backgroundColor = '#20202e';
    } else {
	    laundryList.style.backgroundColor = '#181824';
    }
  }
}

// ------------------------------------------------
// F. Revels the hude download button
// ------------------------------------------------

function hugeDownloadReveal() {

  const button = document.querySelector('.s23-huge-download-link');
  
  if (button) {
    let rect = button.getBoundingClientRect();
    let windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Calculate how much of the button is visible
    let percentVisible = Math.max(0, Math.min(1, (windowHeight - rect.top) / rect.height));

    // Calculate the width and borderRadius based on how much is visible
    let width = 100 - (25 * percentVisible);
    let borderRadius = 330 * percentVisible;

    button.style.width = `${width}%`;
    button.style.borderRadius = `${borderRadius}px`;
  }

}