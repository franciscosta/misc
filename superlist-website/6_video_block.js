
// ------------------------------------------------
// A. The video files themselves
// ------------------------------------------------

const videos = {
  "desktop": "https://res.cloudinary.com/superlist/video/upload/v1698306208/website/2023/video/Superlist_Walkthrough_2_qk7jlx.mp4",
  "mobile": "https://res.cloudinary.com/superlist/video/upload/v1694815451/website/2023/video/RPReplay_Final1694815391_uc52cd.mp4"
}

// ------------------------------------------------
// B. Adds the video element to the page
// ------------------------------------------------

function addAutoplayVideo() {

  // 1. Get width to check if mobile
  let deviceWidth = window.innerWidth;

  // 2. Find the parent
  const element = document.querySelector(`.s23-video-itself`);

  // 3. Adds the right file based on width
  let videoSource = deviceWidth > 480 ? videos.desktop : videos.mobile;

  // 4. Creates the HTML object
  const video = `
    <video autoplay muted loop playsinline class="s23-app-video">
      <source src="${videoSource}" type="video/mp4">
    </video>
  `;

  // 5. Adds to the parent
  element.innerHTML += video;
}

// ------------------------------------------------
// D. Adds the element
// ------------------------------------------------

function initGrowingTimeline() {

  // 1. Gets the video and the timeline
  const video = document.querySelector('.s23-app-video');
  const timeline = document.querySelector('.s23-video-growing-timeline');

  // 2. Helper function to update timeline width
  const updateTimelineWidth = () => {

    // a. Gets the values
    const videoDuration = video.duration;
    const currentTime = video.currentTime;
    const percentagePlayed = (currentTime / videoDuration) * 100;

    // b. Ensures it doesn't exceed 100%
    const width = Math.min(percentagePlayed, 100) + '%';
    timeline.style.width = width;
  };

  // 3. Adds a CSS animation on play
  video.addEventListener('play', () => {
    timeline.style.animation = 'grow 60s linear infinite';
  });

  // 4. Removes the animation on pause
  video.addEventListener('pause', () => {
    timeline.style.animation = 'none';
  });

  // 5. Updates the timeline everytime the video play time updates
  video.addEventListener('timeupdate', updateTimelineWidth);

  timeline.addEventListener('animationiteration', () => {
    timeline.style.animation = 'none';
    timeline.style.width = '10%';
    setTimeout(() => {
      timeline.style.animation = 'grow 60s linear infinite';
    }, 350);
  });
}

// ------------------------------------------------
// E. Function calls
// ------------------------------------------------

addAutoplayVideo();
initGrowingTimeline();