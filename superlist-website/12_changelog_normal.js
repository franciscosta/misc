// ------------------------------
// Control pannel

// ---- Selectors

const heading = document.querySelector('.cl-headingtop');
const cursor = document.querySelector('.cursor');

// ---- Colors

const colors = ['#F84F39', '#6b66da', '#2a966f'];
let variant = 0;

// ---- Words

const words = ["Changelog", `Updates`, `🐞🐛 Fixes`];
let current = 0;

// ---- H1 size

const h1Size = 90;
const h1Ratio = 1050;

// ---- SVG pointer

let currentSVG = 1;

// ---- Speed

const cursorSpeed = 500;
const timeItTakesToLoadChangelog = 600;
const timeBetweenEachWord = 8000;
const delayAsWordIsTyped = 100;
const timeBetweenEachSVGAnimation = 350;

// ------------------------------
// 1. Blinking cursor

function blinkCursor() {
  let isVisible = true;

  setInterval(() => {
    if (isVisible) {
      cursor.style.visibility = 'hidden';
    } else {
      cursor.style.visibility = 'visible';
    }

    isVisible = !isVisible;
  }, cursorSpeed);
}

// ------------------------------
// 2. Update color

function updateColor() {
	
  if (variant > colors.length - 1) { variant = 0; }

	heading.style.color = colors[variant];
  cursor.style.backgroundColor = colors[variant];
	variant++; 
}

// ------------------------------
// 2. Clear heading before typing in new word

function clearHeading() {
	heading.innerText = "";
}

// ------------------------------
// 3. Type in word

function typeIn(word) {

  // Update color
  updateColor();
  
  // Convert word to array
	word = Array.from(word);

  // Type in word
  for (let i = 0; i < word.length; i++) {
    setTimeout(() => {
      heading.innerHTML += word[i];
    }, i * delayAsWordIsTyped);
  }
  
}

// ------------------------------
// 4. Update word

function updateWord() {
  
  // Select the word visually
	heading.classList.toggle('selected');
    
  // Clear the selected word
  setTimeout(() => {
    clearHeading()
    heading.classList.remove('selected');
  }, 1000);
  
  // Type in the next word
  setTimeout(() => {
		typeIn(words[current]);
  }, 2000);
  
  // Increase pointer to next word
  current++;
  if (current > words.length - 1) {
  	current = 0;
  }

}

// ------------------------------
// 6. Dynamic h1 heading size

function dynamicH1(browserWidth) {
  const size = (browserWidth * h1Size) / 1050;
	heading.style.fontSize = size.toString() + 'px';
}

window.addEventListener('resize', () => {
    const browserWidth = window.innerWidth;
		if (browserWidth > 479) { dynamicH1(browserWidth) }
});


// ------
// 7. SVG animations

function randomNumber(x, y) {
  return Math.floor(Math.random() * (y - x + 1) + x);
}

function animateSVG() {
  let path = document.querySelectorAll('path');

  for (let i = 0; i < path.length; i++) {
    const speedClass = "speed" + randomNumber(1, 3);
    path[i].classList.add(speedClass);
  }
}

function hideSVGs() {
	let svgs = document.querySelectorAll('.cl-svg svg, .ch-svgmobile svg');
  
  for (let i = 0; i < svgs.length; i++) {
    svgs[i].style.display = "none";
  } 
}

function updateSVG() {

	if (currentSVG > 3) { 
  	currentSVG = 1;
  }

  let svgDesktop = document.querySelector(`.cl-svg .svg${currentSVG}`);
  let svgMobile = document.querySelector(`.ch-svgmobile .svg${currentSVG}`);

  svgDesktop.style.display = "block";
  svgMobile.style.display = "block";
  
  currentSVG++;
  
}

function setupSVG() {
  hideSVGs();
  updateSVG();
}

// ------------------------------
// 8. Function calls


// ---- Initial setup
blinkCursor(); 
hideSVGs();
animateSVG(); 
clearHeading(); 

// ---- First-time
setTimeout(() => {
  setupSVG();
	typeIn(words[0])  
}, timeItTakesToLoadChangelog); // Type in first word

// ---- Ongoing
setInterval( () => {

	setTimeout( () => {
		setupSVG();
	}, timeBetweenEachSVGAnimation); // Continuously update word

  updateWord();
}, timeBetweenEachWord); // Continuously update word
