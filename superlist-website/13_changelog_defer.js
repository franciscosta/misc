
// ------------------------------
// Control Panel

// ---- All lists

const allLists = document.querySelectorAll('ul, ol');

// ---- All images

const images = document.querySelectorAll('.cl-logheader img');
const backgrounds = document.querySelectorAll('.cl-logheader');

// ---- Speed for safari
const loadSpeed = 0;


// ------------------------------
// 1. Reformat list items

function reformatListItems(list) {

	let items = list.querySelectorAll('li');
  
  for (let i = 0; i < items.length; i++) {

		// Split text into main and detail
  	const fullText = items[i].innerHTML;
    const mainText = fullText.replace(/\[(.*?)\]/g, '');
		const detailText = fullText.match(/\[(.*?)\]/);
    
    // Clear the inner HTML
    items[i].innerHTML = "";
    
    // HTML Structure for the main content
		const outerDiv = document.createElement('div');
		const mainDiv = document.createElement('div');
    mainDiv.classList.add('main');
    mainDiv.classList.add('balance-text');
    
    if (detailText) {
    	items[i].classList.add('hasDetail');
      mainDiv.classList.add('hasDetail');
	    mainDiv.innerHTML = mainText;	
      
      addMoreInfoIcon(mainDiv);
      
    } else {
      mainDiv.innerHTML = mainText;
    }

    outerDiv.appendChild(mainDiv);
    
    // HTML Structure for the detail content
    if (detailText) {
    	const text = detailText[1];
      
      const detailDiv = document.createElement('div');
      detailDiv.classList.add('detail');
      detailDiv.classList.add('outOfSight');

      detailDiv.innerHTML = text;
      outerDiv.appendChild(detailDiv); 
    }
    
    // Append contents to the li
    items[i].appendChild(outerDiv);
  }
}



// ------------------------------
// 2. Add more info icon

function addMoreInfoIcon(div) {

  // Get the last word
  const text = div.innerHTML.trim();
  const words = text.split(' ');
  const lastWordIndex = words.length - 1;
  const lastWord = words[lastWordIndex];
  const lastWordLength = lastWord.length;

  // Remove the last word from the text
  const textWithoutLastWord = text.slice(0, -lastWordLength).trim();

  // Create the span element
  const spanElement = document.createElement('span');
	if (!lastWord.includes('strong>')) spanElement.textContent = lastWord + ' ';
  spanElement.classList.add('moreSpan');

  const imgElement = document.createElement('img');
  imgElement.src = 'https://uploads-ssl.webflow.com/625593a881b8ebd169835ca5/6390d5c386e9817b4db60fd6_Content.svg';
  imgElement.classList.add('moreIcon');
	spanElement.appendChild(imgElement);


	if (lastWord.includes('strong>')) {
  	div.innerHTML = `${text} ${spanElement.outerHTML}`;
  } else {
  	div.innerHTML = `${textWithoutLastWord} ${spanElement.outerHTML}`;
  }
  
}




// ------------------------------
// 2. Add checkmarks to all list items

function setupLists() {
	allLists.forEach( list => {
  	reformatListItems(list);
  });
}

// ------------------------------
// 3. Show detail information on click

let previouslyClicked = [];

function showDetailInformatiom() {

  // Get all list items with the class hasDetail
	const listItems = document.querySelectorAll('li.hasDetail');

  listItems.forEach(li => {

    // Add event listener to each list item
    li.addEventListener('click', function() {
    
    	// Control Panel
			const currentlyOpen = document.querySelector('.detail:not(.outOfSight)');
      const detailDiv = this.querySelector('.detail');

			// If there is an open item, close it
			if (currentlyOpen) {
      	currentlyOpen.classList.toggle("outOfSight");
      } 

			// Check if clicked item is the item we just closed and act accordingly
			if (currentlyOpen === detailDiv) {
      	detailDiv.classList.add("outOfSight");
      } else {
      	detailDiv.classList.remove("outOfSight");
      }
      
    });
  });
}

// ------------------------------
// 4. Move image and background on mousemove

function moveImageAndBackground(images, backgrounds) {

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('mousemove', (event) => {
      const cursorX = event.offsetX;
      const cursorY = event.offsetY;

      const imageX = -(cursorX - images[i].offsetWidth / 2) / 15;
      const imageY = -(cursorY - images[i].offsetHeight / 2) / 15;

      const backX = -(cursorX - backgrounds[i].offsetWidth / 2) / 40;
      const backY = -(cursorY - backgrounds[i].offsetHeight / 2) / 40;

      images[i].style.transform = `translate(${imageX}px, ${imageY}px)`;
      backgrounds[i].style.transform = `translate(${backX}px, ${backY}px)`;
    });
  }
}


// ------------------------------
// 5. Function calls

setupLists();
showDetailInformatiom()
// moveImageAndBackground(images, backgrounds);
