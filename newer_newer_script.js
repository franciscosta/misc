
// -------------------------
// Update Dreamscape based on user location

fetch('https://ipinfo.io/json')
.then(response => response.json())
.then(data => {

	const country = data.country;
  const region = data.region;
  
  if (country == "CA") {
    listsContent[0].dreamscape = geoLocatedDreamscapes.Canada;
  } else if (country == "DE") {
    listsContent[0].dreamscape = geoLocatedDreamscapes.Germany;
  } else if (region == "Washington") {
	  listsContent[0].dreamscape = geoLocatedDreamscapes.Washington;
  } else if (region == "California") {
    listsContent[0].dreamscape = geoLocatedDreamscapes.California;
  }

  const dreamscape = document.querySelector('.s23-dreamscape');
  dreamscape.style.backgroundImage = `url("${listsContent[0].dreamscape}")`;
  
});

// -------------------------
// Select element under heading

function selectUseCase(list) {

  function setProperty(element, color) {
    element.style.setProperty('color', color, 'important');
    element.style.setProperty('border', `2px solid ${color}`, 'important');
  }

  function setHoverStyle(selector, color) {
    const style = document.createElement('style');
    style.innerHTML = `
      ${selector}:hover {
        color: ${color} !important;
        border: 2px solid ${color} !important;
      }
    `;
    document.head.appendChild(style);
  }

  const usercaseButtons = document.querySelectorAll('.s23-usecase-button');

  usercaseButtons.forEach(button => {
    button.style.setProperty('color', '#72718a', 'important');
    button.style.setProperty('border', '2px solid rgba(108, 108, 158, 0.15)', 'important');
  });

  if (list.title == "App Launch") {
    const button = document.querySelector('.s23-ucb-1'); 
    setProperty(button, '#2590F2');
    setHoverStyle('.s23-ucb-1', '#2590F2');
  } else if (list.title == "Kitchen Reno") {
    const button = document.querySelector('.s23-ucb-2'); 
    setProperty(button, '#F84F39');
    setHoverStyle('.s23-ucb-2', '#F84F39');
  } else if (list.title == "Daily Habits") {
    const button = document.querySelector('.s23-ucb-3'); 
    setProperty(button, '#2A966F');
    setHoverStyle('.s23-ucb-3', '#2A966F');
  }

}


// -------------------------
// Match each sidebar element to a list

const listItems = document.querySelectorAll('.s23-sidebar-hoverableitem');

listItems.forEach(item => {
  item.addEventListener('click', function() {
      const listName = this.querySelector('.text-block-9').textContent;
      
      // Find the corresponding list in listsContent
      const matchingList = listsContent.find(list => list.title === listName);
      
      if (matchingList) {
        generateNewList(matchingList);

        // If valid element was clicked, select it
        listItems.forEach(item => {
          item.classList.remove('s23-sidebar-selected');
        });
            
        item.classList.add('s23-sidebar-selected');

        selectUseCase(matchingList);
      }

  });
});

// -------------------------
// List generating function

function generateNewList(contentObject) {

  const appBody = document.querySelector('.s23-app-body');
  if (!appBody) return;

  // Fade out the content to make changes
  appBody.classList.add('hidden');

  setTimeout(() => {

      // Clear the existing content
      while (appBody.firstChild) {
          appBody.removeChild(appBody.firstChild);
      }

      // Add shared element
      const shareElement = createShareElement(contentObject.avatars, contentObject.moreUsersText);
      appBody.appendChild(shareElement);

      // Add title
      const titleObject = createTitleElement(contentObject.title);
      appBody.appendChild(titleObject);

      // Loop through tasks / paragraphs and add each one
      contentObject.items.forEach(item => {
          if (item.type === "paragraph") {
              const paragraphObject = createParagraphElement(item.text);
              appBody.appendChild(paragraphObject);
          } else if (item.type === "task") {
              const taskObject = createTaskElement(item.text, item.completed, item.metadata, item.image2, item.image3);
              appBody.appendChild(taskObject);
          }
      });

      // Fade in the content and enable sound
      setTimeout(() => {
        appBody.classList.remove('hidden');

        // Update dreamscaoe
        const dreamscape = document.querySelector(".s23-dreamscape");
        dreamscape.style.backgroundImage = `url(${contentObject.dreamscape})`;

        soundifyCheckboxes();
      }, 50);

  }, 300); 
}

// -------------------------
// Share Block

function createShareElement(avatarCount, moreUsersText) {
  
  const avatarUrls = [
    "https://global-uploads.webflow.com/625593a881b8ebd169835ca5/64fa3fb9a17ddc5fdd291011_Rectangle%202899.jpg",
    "https://global-uploads.webflow.com/625593a881b8ebd169835ca5/64fa3fb851d65e51f39a0668_Rectangle%202900.jpg",
    "https://global-uploads.webflow.com/625593a881b8ebd169835ca5/64fa3fb9ec332357abbd9ebd_Rectangle%202901.jpg",
    "https://global-uploads.webflow.com/625593a881b8ebd169835ca5/64fa3fb96b77db1c6ed64f79_Rectangle%202902.jpg",
    "https://global-uploads.webflow.com/625593a881b8ebd169835ca5/64fa3fb805a98a90b6935a98_Rectangle%202903.jpg"
  ];

  // Create the main div container
  const mainDiv = document.createElement('div');
  mainDiv.className = 's23-app-users-container';

  // Loop through and create each avatar image up to the specified count
  for (let i = 0; i < avatarCount && i < avatarUrls.length; i++) {
    const img = document.createElement('img');

    if (avatarCount == 1) {
      img.src = userAvatars.Private;
    } else {
      img.src = avatarUrls[i];
    }

    img.loading = 'lazy';
    img.alt = "";
    img.className = 's23-user-avatar';
    if (i > 0) {
      img.className += ` s23-ua-${i + 1}`;
    }
    mainDiv.appendChild(img);
  }

  // Create the 'more users' div if necessary
  if (moreUsersText) {
    const moreUsersDiv = document.createElement('div');
    moreUsersDiv.className = 's23-users-more';
    moreUsersDiv.textContent = moreUsersText;
    mainDiv.appendChild(moreUsersDiv);
  }

  return mainDiv;
}


// -------------------------
// Title Block

function createTitleElement(text) {
    // Create the main div with the class attributes
    const mainDiv = document.createElement('div');
    mainDiv.className = 's23-app-title-container';

    // Create the inner div and set its text content
    const titleDiv = document.createElement('div');
    titleDiv.textContent = text;

    // Append the title div to the main div
    mainDiv.appendChild(titleDiv);

    return mainDiv;
}

// -------------------------
// Paragraph Block

function createParagraphElement(text) {
    // Create the main div with the class attributes
    const mainDiv = document.createElement('div');
    mainDiv.className = 's23-app-item s23-app-paragraph';

    // Create the text block div with the class attributes
    const textBlock = document.createElement('div');
    textBlock.className = 'text-block-10';
    textBlock.textContent = text;

    // Append the text block to the main div
    mainDiv.appendChild(textBlock);

    return mainDiv;
}

// -------------------------
// Task Block

function createTaskElement(text, completed, metadataBool, image2 = null, image3 = null) {
    const createElementWithAttributes = (tag, attributes) => {
        const element = document.createElement(tag);
        for (const [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value);
        }
        return element;
    };

    const root = createElementWithAttributes('div', { class: 's23-v2-task' });
    const spacer1 = createElementWithAttributes('div', { class: 's23-v2-spacer' });
    const taskBody = createElementWithAttributes('div', { class: 's23-v2-task-body' });
    const checkboxContainer = createElementWithAttributes('div', { class: 's23-v2-task-checkbox-container' });
    const appCheckbox = createElementWithAttributes('div', { class: 's23-app-checkbox' });
    const img1 = createElementWithAttributes('img', {
        src: 'https://global-uploads.webflow.com/625593a881b8ebd169835ca5/64fa4c92b1e1d331a802f802_dsfgdf.svg',
        loading: 'lazy',
        alt: ''
    });
    const contentContainer = createElementWithAttributes('div', { class: 's23-v2-task-content-container' });
    const textWrapper = createElementWithAttributes('div', { class: 's23-task-text-wrapper' });
    textWrapper.textContent = text;
    const taskCompleted = createElementWithAttributes('div', { class: `s23-app-task-completed` });
    const completedStroke = createElementWithAttributes('div', { class: 's23-app-completed-stroke' });
    const v2Metadata = createElementWithAttributes('div', { class: 's23-v2-metadata' });
    const spacer2 = createElementWithAttributes('div', { class: 's23-v2-spacer s23-v2-right-spacer' });

    // Assembling elements together
    appCheckbox.appendChild(img1);
    checkboxContainer.appendChild(appCheckbox);
    textWrapper.appendChild(taskCompleted);
    taskCompleted.appendChild(completedStroke);
    contentContainer.appendChild(textWrapper);

    if (completed) {
      appCheckbox.classList.add('check-active');
      textWrapper.classList.add('text-active');
      taskCompleted.classList.add('strokethrough-active');
    }

    if (metadataBool) {
        const metadata = createElementWithAttributes('div', { class: 's23-app-task-metadata' });
        const metadataBlog1 = createElementWithAttributes('div', { class: 's23-app-metadata-blog' });
        const metadataBlog2 = createElementWithAttributes('div', { class: 's23-app-metadata-blog' });
        metadata.appendChild(metadataBlog1);
        metadata.appendChild(metadataBlog2);
        contentContainer.appendChild(metadata);
    }

    if (image2) {
        const img2El = createElementWithAttributes('img', {
            src: image2,
            loading: 'lazy',
            alt: '',
            class: 's23-v2-integration-in-task'
        });
        v2Metadata.appendChild(img2El);
    }

    if (image3) {
        const img3El = createElementWithAttributes('img', {
            src: image3,
            loading: 'lazy',
            alt: '',
            class: 's23-v2-avatar-in-task'
        });
        v2Metadata.appendChild(img3El);
    }

    taskBody.appendChild(checkboxContainer);
    taskBody.appendChild(contentContainer);
    taskBody.appendChild(v2Metadata);
    root.appendChild(spacer1);
    root.appendChild(taskBody);
    root.appendChild(spacer2);

    return root;
}
  

// -------------------------
// Task completion behavior

function soundifyCheckboxes() {

  const checkboxes = document.querySelectorAll('.s23-v2-task .s23-app-checkbox');
  
  const sounds = [
    'https://res.cloudinary.com/superlist/video/upload/v1694132643/website/2023/sound/dir1-checkbox-on-05_smu6s9.wav',
    'https://res.cloudinary.com/superlist/video/upload/v1694132643/website/2023/sound/dir1-checkbox-on-08_mrlies.wav',
    'https://res.cloudinary.com/superlist/video/upload/v1694132642/website/2023/sound/dir1-checkbox-on-06_rova33.wav',
    'https://res.cloudinary.com/superlist/video/upload/v1694132642/website/2023/sound/dir1-checkbox-on-04_pchv6a.wav',
    'https://res.cloudinary.com/superlist/video/upload/v1694132642/website/2023/sound/dir1-checkbox-on-09_kv1xqo.wav',
    'https://res.cloudinary.com/superlist/video/upload/v1694132642/website/2023/sound/dir1-checkbox-on-10_sq7vyp.wav',
    'https://res.cloudinary.com/superlist/video/upload/v1694132642/website/2023/sound/dir1-checkbox-on-07_fl1xrj.wav',
  ]
  
  checkboxes.forEach(checkbox => {
  
    checkbox.addEventListener('click', function(e) {
    
      let parentTask = e.currentTarget.closest('.s23-v2-task');
      if (parentTask) {
      
        console.log('Found the parent');

        let check = parentTask.querySelector('.s23-app-checkbox');
        let stokethrough = parentTask.querySelector('.s23-app-task-completed');
        let text = parentTask.querySelector('.s23-task-text-wrapper');
  
        if (check) check.classList.toggle('check-active');
        if (stokethrough) stokethrough.classList.toggle('strokethrough-active');
        if (text) text.classList.toggle('text-active');
      }
      
      let sound = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
      sound.play();
      
    });
  });
  
}

soundifyCheckboxes();

// -------------------------
// Sound on click for menu items

const buttons = document.querySelectorAll('.withsound');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        let sound = new Audio('https://res.cloudinary.com/superlist/video/upload/v1694039377/website/2023/sound/dir1-checkbox-on-08_p60hhl.wav');
        sound.play();
    });
});

