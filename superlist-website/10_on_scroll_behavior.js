
// ------------------------------------------------
// A. Call functions on scroll
// ------------------------------------------------

document.addEventListener('scroll', function() {

  let deviceWidth = window.innerWidth;

  // hideForeverFree();

  // Slowing down elements
  slowerApp('.s23-app', 0.1, deviceWidth); // the app itself

  // Everything else
  firstSlideReveal(deviceWidth);
  darkSectionReveal();
  laundryListReveal();
  hugeDownloadReveal();

});

// ------------------------------------------------
// B. Hiding forever free on mobile
// ------------------------------------------------

// function hideForeverFree() {
//   const item = document.querySelector('.s23-forever-free-container');

//   let distanceFromTop = item.getBoundingClientRect().top;

//   if (distanceFromTop < 100) {
//     item.style.opacity = '0';
//   } else {
//     item.style.opacity = '1'
//   }

// }

// ------------------------------------------------
// B. Adds some paralax to the app
// ------------------------------------------------

function slowerApp(elementClass, speed, deviceWidth) {

  if (deviceWidth > 480) {
    var app = document.querySelector(elementClass);
    var scrolled = window.scrollY;
    
    var offset = scrolled * speed;
    app.style.transform = 'translate3d(0,' + offset + 'px, 0)';
  }
}

// ------------------------------------------------
// C. Revels the first slide
// ------------------------------------------------

function firstSlideReveal(deviceWidth) {

  const firstSlide = document.querySelector('.s23-slide-first');
  const innerSection = firstSlide.querySelector('.s23-pitch-right-1');
  const innerSectionImage = innerSection.querySelector('.s23-first-image');
  const hero = document.querySelector('.s23-hero');
  
  if (firstSlide) {
  	let firstSlidePosition = firstSlide.parentNode.getBoundingClientRect().top;
    
    let distance = deviceWidth > 480 ? 500 : 350; 
		let width = deviceWidth > 480 ? '95%' : '90%';
		let height = deviceWidth > 480 ? '90vh' : 'auto';
		let borderRadius = deviceWidth > 480 ? '80px' : '40px'
    let margintop = deviceWidth > 480 ? '0' : '30px'
    
    if (firstSlidePosition <= distance) {
      firstSlide.style.width = width;
      firstSlide.style.height = height;
      firstSlide.style.borderRadius = borderRadius;
      firstSlide.style.marginTop = margintop;

      innerSection.style.backgroundColor = '#6b66da';
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
