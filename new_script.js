
// ------------------------- VIDEO BLOCK -----------------------------
// ------------------------- VIDEO BLOCK -----------------------------
// ------------------------- VIDEO BLOCK -----------------------------

// 1. Handles the video block
// Sets the file based on desktop vs mobile width
// And adds the video object to the page

// const videos = {
//   "desktop": "https://res.cloudinary.com/superlist/video/upload/c_scale,w_1800/v1694803219/website/2023/video/CleanShot_2023-09-15_at_11.37.26_hjqtni.mp4",
//   "mobile": "https://res.cloudinary.com/superlist/video/upload/v1694815451/website/2023/video/RPReplay_Final1694815391_uc52cd.mp4"
// }

// function addAutoplayVideo() {
//   const element = document.querySelector(`.s23-video-itself`);
//   let deviceWidth = window.innerWidth;
  
//   let videoSource = "";

// 	if (deviceWidth > 480) {
//   	videoSource = videos.desktop;
//   } else {
//   	videoSource = videos.mobile;
//   }

//   const video = `
//     <video autoplay muted loop playsinline class="s23-app-video">
//       <source src="${videoSource}" type="video/mp4">
//     </video>
//   `;

//   element.innerHTML += video;
// }

// addAutoplayVideo();

// -------------------------
// -------------------------
// -------------------------
// 2. Handles the timeline underneath the video
// Synchronizes the width of timeline with the video duration

// function initGrowingTimeline() {
//   const timeline = document.querySelector('.s23-video-growing-timeline');
//   const video = document.querySelector('.s23-app-video');

//   // Function to update the timeline's width
//   const updateTimelineWidth = () => {
//     const videoDuration = video.duration;
//     const currentTime = video.currentTime;
//     const percentagePlayed = (currentTime / videoDuration) * 100;

//     // Ensure it doesn't exceed 100%
//     const width = Math.min(percentagePlayed, 100) + '%';
//     timeline.style.width = width;
//   };

//   video.addEventListener('play', () => {
//     // When video starts, ensure the timeline grows
//     timeline.style.animation = 'grow 60s linear infinite';
//   });

//   video.addEventListener('pause', () => {
//     // When video is paused, remove the growing animation and keep it at its current width
//     timeline.style.animation = 'none';
//   });

//   video.addEventListener('timeupdate', updateTimelineWidth);

//   timeline.addEventListener('animationiteration', () => {
//     timeline.style.animation = 'none';
//     timeline.style.width = '10%';
//     setTimeout(() => {
//       timeline.style.animation = 'grow 60s linear infinite';
//     }, 350);
//   });
// }

// initGrowingTimeline();


// ------------------------- LAUNDRY LIST -----------------------------
// ------------------------- LAUNDRY LIST -----------------------------
// ------------------------- LAUNDRY LIST -----------------------------

// 1. Handles the fading away of each item
// Gets number of items in the list, divides 90% opacity by number of item
// Then decreases that by all items. This ensures last item is always 10%.

function adjustOpacity() {
  const elements = document.querySelectorAll('.s23-laundry-row-title');
  
  if (!elements.length) return; 
  
  const decrement = (1 - 0.1) / (elements.length - 1); 

  for (let i = 1; i < elements.length; i++) {

      const targetOpacity = 1 - i * decrement;
      elements[i].style.opacity = targetOpacity.toFixed(2); 
  }
}

adjustOpacity();


// ------------------------- HUGE DOWNLOAD BUTTON -----------------------------
// ------------------------- HUGE DOWNLOAD BUTTON -----------------------------
// ------------------------- HUGE DOWNLOAD BUTTON -----------------------------

// 1. Handles the color updating of the button
// Based on where the user's mouse is (4 quadrants)
function updateButtonColor(e) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const halfWidth = width / 2;
  const halfHeight = height / 2;

  const button = document.querySelector('.s23-huge-download-link');
  if (!button) return; 

  const quadrant = (e.clientX > halfWidth) + 2 * (e.clientY > halfHeight);

  const colors = ['#F84F39', '#6B66DA', '#2590F2', '#2A966F'];

  button.style.backgroundColor = colors[quadrant];
}

document.addEventListener('mousemove', function(e) {
  updateButtonColor(e)
});

// -------------------------
// -------------------------
// -------------------------
// 2. Sets the url if mobile
function setDownloadUrl() {

  const width = window.innerWidth;
  const button = document.querySelector('.s23-huge-download-link');

  if (width <= 991) {
    button.href="#thisisadownloadlink"
  }
}

setDownloadUrl()


// ------------------------- ON SCROLL REVEALS -----------------------------
// ------------------------- ON SCROLL REVEALS -----------------------------
// ------------------------- ON SCROLL REVEALS -----------------------------

document.addEventListener('scroll', function() {

  // slowerApp();
  firstSlideReveal();
  darkSectionReveal();
  laundryListReveal();
  hugeDownloadReveal();

});

function slowerApp() {

  var app = document.querySelector('.s23-app');
  var scrolled = window.scrollY;
  
  var offset = scrolled * 0.1;
  app.style.transform = 'translate3d(0,' + offset + 'px, 0)';
}

function firstSlideReveal() {

  const firstSlide = document.querySelector('.s23-slide-first');
  const innerSection = firstSlide.querySelector('.s23-pitch-right-1');
  const innerSectionImage = innerSection.querySelector('.s23-first-image');
  
  if (firstSlide) {
  	let firstSlidePosition = firstSlide.parentNode.getBoundingClientRect().top;
    let deviceWidth = window.innerWidth;
    
    let distance = deviceWidth > 480 ? 0 : 150; 
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
    } else {
      firstSlide.style.width = '100%';
      firstSlide.style.height = '100vh';
      firstSlide.style.borderRadius = '0px';
      firstSlide.style.marginTop = '0px';

      innerSection.style.backgroundColor = 'transparent';
      innerSectionImage.style.opacity = '0';
    }
  }
}

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
