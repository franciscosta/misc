
function addDoodlesToLogo() {

  const doodleContainers = document.querySelector('.s23-superlist-logo-link');

  const leftSvg = `
  <svg class="logo-doodle super-svg" viewBox="0 0 97 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M93.9481 11.584C64.1441 6.26141 4.11538 -2.54504 2.43233 4.8098C0.328525 14.0033 80.7993 2.87431 95 3.84205" stroke="#2590F2" stroke-width="4" stroke-linecap="round"/>
  </svg>
  `;

  const rightSvg = `
  <svg class="logo-doodle list-svg" viewBox="0 0 69 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.50635 15.1493C3.98543 13.5307 10.1131 5.71953 10.2715 4.98064C10.43 4.24174 16.0294 12.6511 16.8218 13.777C17.6141 14.903 21.8401 6.84547 22.8966 5.22694C23.9531 3.6084 26.0132 12.4048 26.8584 13.777C27.7036 15.1493 31.6126 6.00102 32.405 4.98064C33.1974 3.96025 36.1555 12.4048 36.5253 13.39C36.8951 14.3752 40.223 5.68434 40.5928 4.98064C40.9626 4.27693 44.8716 10.8214 45.7696 12.5455C46.6676 14.2696 52.2142 4.66397 52.7424 3.46766C53.2707 2.27135 54.6969 8.92142 55.4893 10.4696C56.2817 12.0178 61.7226 3.29173 62.2508 2.41209C62.7791 1.53245 63.3601 10.3288 67.0579 13.39" stroke="#F84F39" stroke-width="3.33063" stroke-linecap="round"/>
  </svg>
  `;

  doodleContainers.innerHTML += leftSvg + rightSvg;

  const paths = document.querySelectorAll('.logo-doodle path');
  paths.forEach(path => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
  });  
}


document.addEventListener('DOMContentLoaded', () => {
  addDoodlesToLogo();
});