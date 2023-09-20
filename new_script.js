

// ------------------------- DOWNLOAD WIDGET -----------------------------
// ------------------------- DOWNLOAD WIDGET -----------------------------
// ------------------------- DOWNLOAD WIDGET -----------------------------

// 1. Handles download widget behavior

function downloadWidget() {

  const parent = document.querySelector('.s23-try-superlist-container');
  const expanded = document.querySelector('.s23-expanded-container');
  const collapsed = document.querySelector('.s23-collapsed-container');
  const closeButton = document.querySelector('.s23-try-close-button');
  const hugeDownload = document.querySelector('.s23-huge-download-link');

  parent.classList.add('snappy-animation');
  expanded.classList.add('snappy-animation');
  collapsed.classList.add('snappy-animation');

  // Sets the initial state on load
  function initialState() {
    expanded.style.width = "0px";
    collapsed.style.width = "195px";
    closeButton.style.opacity = '0';
  }
  
  initialState();

  // Handles the click on the collapsed state (expands)
  function expandWidget() {
    parent.classList.add('try-superlist-clicked-state');
    expanded.style.width = 'auto';
    collapsed.style.width = '0px';
    closeButton.style.opacity = '1';
  }
  
  collapsed.addEventListener('click', expandWidget);
  hugeDownload.addEventListener('click', expandWidget);

  // Handles click on close button (collapses)
  function closeWidget() {
    initialState();
    parent.classList.remove('try-superlist-clicked-state');
  }

  closeButton.addEventListener('click', closeWidget);  

  // Handles keyboard events
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeWidget();
    } else if (event.key === 'd' || event.key === 'D') {
      expandWidget();
    }
  });
}

downloadWidget();


// ------------------------- SUPERLIST LOGO -----------------------------
// ------------------------- SUPERLIST LOGO -----------------------------
// ------------------------- SUPERLIST LOGO -----------------------------

// 1. Adds the doodle underneath Superlist

const doodleContainers = document.querySelectorAll('.s23-superlist-logo-link');

const superSvg = `
<svg class="logo-doodle super-svg" viewBox="0 0 97 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M93.9481 11.584C64.1441 6.26141 4.11538 -2.54504 2.43233 4.8098C0.328525 14.0033 80.7993 2.87431 95 3.84205" stroke="#2590F2" stroke-width="4" stroke-linecap="round"/>
</svg>
`;

const listSvg = `
<svg class="logo-doodle list-svg" viewBox="0 0 69 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.50635 15.1493C3.98543 13.5307 10.1131 5.71953 10.2715 4.98064C10.43 4.24174 16.0294 12.6511 16.8218 13.777C17.6141 14.903 21.8401 6.84547 22.8966 5.22694C23.9531 3.6084 26.0132 12.4048 26.8584 13.777C27.7036 15.1493 31.6126 6.00102 32.405 4.98064C33.1974 3.96025 36.1555 12.4048 36.5253 13.39C36.8951 14.3752 40.223 5.68434 40.5928 4.98064C40.9626 4.27693 44.8716 10.8214 45.7696 12.5455C46.6676 14.2696 52.2142 4.66397 52.7424 3.46766C53.2707 2.27135 54.6969 8.92142 55.4893 10.4696C56.2817 12.0178 61.7226 3.29173 62.2508 2.41209C62.7791 1.53245 63.3601 10.3288 67.0579 13.39" stroke="#F84F39" stroke-width="3.33063" stroke-linecap="round"/>
</svg>
`;

doodleContainers.forEach(logo => {
	logo.innerHTML += superSvg + listSvg;
});

const paths = document.querySelectorAll('.logo-doodle path');
paths.forEach(path => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
});


// ------------------------- SUPERLIST APP -----------------------------
// ------------------------- SUPERLIST APP -----------------------------
// ------------------------- SUPERLIST APP -----------------------------

// 0. Static data for each list

const userAvatars = {
  "Private": "https://uploads-ssl.webflow.com/625593a881b8ebd169835ca5/64fb95bee31ef10f4fff2139_Group%202402.png",
  "Jenna": "https://global-uploads.webflow.com/625593a881b8ebd169835ca5/64fa3fb9a17ddc5fdd291011_Rectangle%202899.jpg",
  "Ada": "https://global-uploads.webflow.com/625593a881b8ebd169835ca5/64fa3fb851d65e51f39a0668_Rectangle%202900.jpg",
  "Jon": "https://uploads-ssl.webflow.com/625593a881b8ebd169835ca5/64fa3fb9ec332357abbd9ebd_Rectangle%202901.jpg",
  "Stan": "https://uploads-ssl.webflow.com/625593a881b8ebd169835ca5/64fa3fb96b77db1c6ed64f79_Rectangle%202902.jpg",
  "Keyla": "https://uploads-ssl.webflow.com/625593a881b8ebd169835ca5/64fa3fb805a98a90b6935a98_Rectangle%202903.jpg",
};

const integrationIcons = {
  "Gmail": "https://uploads-ssl.webflow.com/625593a881b8ebd169835ca5/64fa47d26b77db1c6ee0fa4a_Logo.png",
  "Notion": "https://uploads-ssl.webflow.com/625593a881b8ebd169835ca5/64fa4d4437ba6791a9712077_Logo.png",
  "Linear": "https://uploads-ssl.webflow.com/625593a881b8ebd169835ca5/64fa4d23ddf69b1cf4b4cda5_Logo.png",
};

const dreamscapes = {
  "Landscape": "https://uploads-ssl.webflow.com/625593a881b8ebd169835ca5/64ff85f7377dbac9ecd4349e_dream1-min.jpg",
  "Kitchen": "https://uploads-ssl.webflow.com/625593a881b8ebd169835ca5/64ff85ffc5d63e58749237cc_dream2-min.jpg",
  "Art": "https://uploads-ssl.webflow.com/625593a881b8ebd169835ca5/64ff85fb19e6b9cdb2331876_dream3-min.jpg",
};

const geoLocatedDreamscapes = {
  "Canada": "https://uploads-ssl.webflow.com/625593a881b8ebd169835ca5/64fa50af55db0bda23d2134b_CleanShot%202023-09-07%20at%2015.35.57%402x-min.png",
  "Germany": "https://uploads-ssl.webflow.com/625593a881b8ebd169835ca5/64fa4f22b2f5c8bc58b85522_CleanShot%202023-09-07%20at%2015.30.23%402x-min.png",
  "California": "https://uploads-ssl.webflow.com/625593a881b8ebd169835ca5/64fa522855db0bda23d3be22_CleanShot%202023-09-07%20at%2015.43.05%402x-min.png",
  "Washington": "https://uploads-ssl.webflow.com/625593a881b8ebd169835ca5/64fa5124fc3e102b1ccbbd1f_CleanShot%202023-09-07%20at%2015.36.37%402x-min.png",
};

// -------------------------
// -------------------------
// -------------------------
// 0. List content

const listsContent = [
  {
  title: "App Launch",
  avatars: 5,
  moreUsersText: "+6",
  dreamscape: dreamscapes.Landscape,
  items: [
    {
      type: "paragraph",
      text: "Hey team, here's a quick recap of what we're working on ahead of the launch. Feel free to add any more color and detail to each task."
    },
    {
      type: "task",
      text: "Launch readiness",
      completed: true,
      metadata: true,
      image2: null,
      image3: userAvatars.Ada,
    },
    {
      type: "task",
      text: "Value proposition",
      completed: true,
      metadata: false,
      image2: integrationIcons.Gmail,
      image3: userAvatars.Jon,
    },
    {
      type: "task",
      text: "Marketing strategy",
      completed: false,
      metadata: false,
      image2: null,
      image3: userAvatars.Stan,
    },
    {
      type: "task",
      text: "Design system update",
      completed: false,
      metadata: false,
      image2: integrationIcons.Linear,
      image3: userAvatars.Jenna,
    },
    {
      type: "task",
      text: "Website Design & Dev",
      completed: false,
      metadata: true,
      image2: null,
      image3: userAvatars.Keyla,
    },
    {
      type: "task",
      text: "Pricing strategy",
      completed: true,
      metadata: false,
      image2: integrationIcons.Notion,
      image3: userAvatars.Jon,
    },
    {
      type: "task",
      text: "Prepare analytics",
      completed: false,
      metadata: false,
      image2: null,
      image3: userAvatars.Ada,
    },
  ]},
  {
  title: "Kitchen Reno",
  avatars: 2,
  moreUsersText: "",
  dreamscape: dreamscapes.Kitchen,
  items: [
    {
      type: "paragraph",
      text: "I'm putting this list together so we can get started organzing the project. Excited that we're doing this. 💚"
    },
    {
      type: "task",
      text: "Choose kitcheb colors",
      completed: true,
      metadata: false,
      image2: null,
      image3: null,
    },
    {
      type: "task",
      text: "Finalize the budget",
      completed: true,
      metadata: true,
      image2: integrationIcons.Notion,
      image3: userAvatars.Jenna,
    },
    {
      type: "task",
      text: "Reach out to contractor",
      completed: false,
      metadata: false,
      image2: null,
      image3: null,
    },
    {
      type: "task",
      text: "Prepare schematics",
      completed: false,
      metadata: false,
      image2: null,
      image3: userAvatars.Ada,
    },
    {
      type: "task",
      text: "Order new electrical",
      completed: false,
      metadata: true,
      image2: null,
      image3: userAvatars.Jenna,
    },
    {
      type: "task",
      text: "Research tiling",
      completed: true,
      metadata: false,
      image2: integrationIcons.Notion,
      image3: null,
    },
    {
      type: "task",
      text: "Order materials",
      completed: false,
      metadata: false,
      image2: null,
      image3: userAvatars.Ada,
    },
    {
      type: "task",
      text: "Find new plummer",
      completed: false,
      metadata: false,
      image2: null,
      image3: null,
    },
    
  ]},
  {
  title: "Daily Habits",
  avatars: 1,
  moreUsersText: "Private",
  dreamscape: dreamscapes.Art,
  items: [
    {
      type: "task",
      text: "Wim Hof breath work",
      completed: true,
      metadata: true,
      image2: null,
      image3: null
    },
    {
      type: "task",
      text: "Shinrin-yoku",
      completed: true,
      metadata: false,
      image2: null,
      image3: null
    },
    {
      type: "task",
      text: "Journal",
      completed: false,
      metadata: false,
      image2: null,
      image3: null
    },
    {
      type: "task",
      text: "Write for at least 30 min",
      completed: false,
      metadata: false,
      image2: null,
      image3: null
    },
    {
      type: "task",
      text: "Train gymnastics",
      completed: true,
      metadata: false,
      image2: null,
      image3: null
    },
    {
      type: "task",
      text: "Meditate",
      completed: false,
      metadata: false,
      image2: null,
      image3: null
    },
    {
      type: "task",
      text: "Yoga before bed",
      completed: false,
      metadata: false,
      image2: null,
      image3: null
    },
    {
      type: "task",
      text: "Draw for at least 30 min",
      completed: false,
      metadata: true,
      image2: null,
      image3: null
    },
    {
      type: "task",
      text: "Sleep amazingly well 🙅‍♂️",
      completed: false,
      metadata: false,
      image2: null,
      image3: null
    },
  ]},
];

// -------------------------
// -------------------------
// -------------------------
// 1. Pre-load assets to memory
// Takes in an object of assets and pre-loads each to memory

function preLoadAssets(assets) {
  const promises = Object.entries(assets).map(([key, value]) => {
      return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = value;
      });
  });
  return Promise.all(promises);
}

preLoadAssets(userAvatars);
preLoadAssets(integrationIcons);
preLoadAssets(dreamscapes);
preLoadAssets(geoLocatedDreamscapes);

// -------------------------
// -------------------------
// -------------------------
// 2. Update Dreamscape based on user location
// getUserLocation() gets the user's location
// geolocateDreamscape(location) takes in a location object
// and updates the dreamscape in the first listContent object (above)

async function getUserLocation() {
  try {
    const response = await fetch('https://ipinfo.io/json');
    const data = await response.json();
    return {
      country: data.country,
      region: data.region
    };
  } catch (error) {
    console.error("Failed to fetch user location:", error);
    return {
      country: "",
      region: ""
    };
  }
}

function updateDreamscape(location) {
  if (location.country === "CA") {
      listsContent[0].dreamscape = geoLocatedDreamscapes.Canada;
  } else if (location.country === "DE") {
      listsContent[0].dreamscape = geoLocatedDreamscapes.Germany;
  } else if (location.region === "Washington") {
      listsContent[0].dreamscape = geoLocatedDreamscapes.Washington;
  } else if (location.region === "California") {
      listsContent[0].dreamscape = geoLocatedDreamscapes.California;
  }

  const dreamscape = document.querySelector('.s23-dreamscape');
  dreamscape.style.backgroundImage = `url("${listsContent[0].dreamscape}")`;
}

getUserLocation().then(updateDreamscape);

// -------------------------
// -------------------------
// -------------------------
// 3. Handles "For team work," "Personal projects," "Everything in between"
// Adds / Removes class to the three buttons at the top of the site
// The function gets passed the currently active list
// And based on that list, it updates the active state of the button

function selectUseCase(list) {
  const usercaseButtons = document.querySelectorAll('.s23-usecase-button');
  
  const useCaseMap = {
    // Indices correspond to the .s23-ucb-x class naming
    "App Launch": { class: 'app-launch', index: 1 },
    "Kitchen Reno": { class: 'kitchen-reno', index: 2 },
    "Daily Habits": { class: 'daily-habits', index: 3 }
  };

  usercaseButtons.forEach(button => {
    for (let key in useCaseMap) {
      // Reset all buttons to init state
      button.classList.remove(useCaseMap[key].class);
    }
  });

  // Get the matching object
  const useCase = useCaseMap[list.title];
  
  if (useCase) {
    const button = document.querySelector(`.s23-ucb-${useCase.index}`);
    // Add the class to the matcing button
    button.classList.add(useCase.class);
  }
}

// -------------------------
// -------------------------
// -------------------------
// 4. Automatically cycles through each button every 8 secs

(function() {

  let currentIndex = 1; 
  let interval;
  const buttons = document.querySelectorAll('.s23-usecase-button');
  const pauseElements = document.querySelectorAll('.pause');

  function triggerButtonAction(index) {
    buttons[index].click();
  }

  function startTransition() {
    if (interval) {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      triggerButtonAction(currentIndex);
      currentIndex = (currentIndex + 1) % buttons.length; 
    }, 8000);
  }

  document.addEventListener("DOMContentLoaded", function() {
    // Start the transition initially.
    startTransition();

    pauseElements.forEach(pauseElement => {
      pauseElement.addEventListener('mouseover', () => {
        clearInterval(interval);
      });

      pauseElement.addEventListener('mouseout', () => {
        startTransition();
      });
    });
  });

})();

// -------------------------
// -------------------------
// -------------------------
// 5. Onload, makes "For team work" active

const button = document.querySelector(`.s23-ucb-1`);
button.classList.add('app-launch');

// -------------------------
// -------------------------
// -------------------------
// 6. Handles the selection of items in the app's sidebar
// This is responsible for generating the actual list content and selecting the button (above)

function handleListItemClick(item) {
  const listName = item.querySelector('.s23-list-title-in-sidebar').textContent;
      
  // Find the corresponding list in listsContent
  const matchingList = listsContent.find(list => list.title === listName);
  
  // Early exit if no matching list found
  if (!matchingList) return; 

  generateNewList(matchingList); // Generates a new list

  deselectAllSidebarItems(); // Deselects all items in sidebar
  selectUseCase(matchingList); // Selects matching item at the top
  item.classList.add('s23-sidebar-selected'); // Select the sidebar
}

function deselectAllSidebarItems() {
  const listItems = document.querySelectorAll('.s23-sidebar-hoverableitem');
  listItems.forEach(item => {
    item.classList.remove('s23-sidebar-selected');
  });
}

const listItems = document.querySelectorAll('.s23-sidebar-hoverableitem');
listItems.forEach(item => {
  item.addEventListener('click', function() {
      handleListItemClick(this);
  });
});

// -------------------------
// -------------------------
// -------------------------
// 7. Generate the new list

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
// -------------------------
// -------------------------
// 8. Generate share block

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
// -------------------------
// -------------------------
// 9. Generates Title Block

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
// -------------------------
// -------------------------
// 10. Generate Paragraph Block

function createParagraphElement(text) {
    // Create the main div with the class attributes
    const mainDiv = document.createElement('div');
    mainDiv.className = 's23-app-item s23-app-paragraph';

    // Create the text block div with the class attributes
    const textBlock = document.createElement('div');
    textBlock.className = 's23-in-app-text';
    textBlock.textContent = text;

    // Append the text block to the main div
    mainDiv.appendChild(textBlock);

    return mainDiv;
}

// -------------------------
// -------------------------
// -------------------------
// 11. Generate Task Block

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
    const textWrapper = createElementWithAttributes('div', { class: 's23-task-text-wrapper s23-in-app-text ellipsis' });
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
// -------------------------
// -------------------------
// 12. Handles task completion behavior

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
// -------------------------
// -------------------------
// 13. Handles the relationship between buttons in header and list items in app
// If user clicks the buttons at the top, it generates a programatic click in the app

function generateClick(origin, destination) {
    
  function programmaticClick() {
      return new MouseEvent('click', {
          'bubbles': true,
          'cancelable': true,
          'view': window
      });
  }
  
  const originElement = document.querySelector(origin);
  const destinationElement = document.querySelector(destination);

  if (originElement && destinationElement) {
      originElement.addEventListener('click', () => {
        destinationElement.dispatchEvent(programmaticClick());
      });
  }
}

generateClick('.s23-ucb-1', '#app-launch-item');
generateClick('.s23-ucb-2', '#kitchen-reno-item');
generateClick('.s23-ucb-3', '#daily-habits-item');

// ------------------------- GENERAL BUTTON SOUND -----------------------------
// ------------------------- GENERAL BUTTON SOUND -----------------------------
// ------------------------- GENERAL BUTTON SOUND -----------------------------

// 1. Adds sound to all menu items that have the 'withsound' class

// const buttons = document.querySelectorAll('.withsound');

// buttons.forEach(function(button) {
//     button.addEventListener('click', function() {
//         let sound = new Audio('https://res.cloudinary.com/superlist/video/upload/v1694039377/website/2023/sound/dir1-checkbox-on-08_p60hhl.wav');
//         sound.play();
//     });
// });


// ------------------------- PITCH DECK -----------------------------
// ------------------------- PITCH DECK -----------------------------
// ------------------------- PITCH DECK -----------------------------







// ------------------------- VIDEO BLOCK -----------------------------
// ------------------------- VIDEO BLOCK -----------------------------
// ------------------------- VIDEO BLOCK -----------------------------

// 1. Handles the video block
// Sets the file based on desktop vs mobile width
// And adds the video object to the page

const videos = {
  "desktop": "https://res.cloudinary.com/superlist/video/upload/c_scale,w_1800/v1694803219/website/2023/video/CleanShot_2023-09-15_at_11.37.26_hjqtni.mp4",
  "mobile": "https://res.cloudinary.com/superlist/video/upload/v1694815451/website/2023/video/RPReplay_Final1694815391_uc52cd.mp4"
}

function addAutoplayVideo() {
  const element = document.querySelector(`.s23-video-itself`);
  let deviceWidth = window.innerWidth;
  
  let videoSource = "";

	if (deviceWidth > 480) {
  	videoSource = videos.desktop;
  } else {
  	videoSource = videos.mobile;
  }

  const video = `
    <video autoplay muted loop playsinline class="s23-app-video">
      <source src="${videoSource}" type="video/mp4">
    </video>
  `;

  element.innerHTML += video;
}

addAutoplayVideo();

// -------------------------
// -------------------------
// -------------------------
// 2. Handles the timeline underneath the video
// Synchronizes the width of timeline with the video duration

function initGrowingTimeline() {
  const timeline = document.querySelector('.s23-video-growing-timeline');
  const video = document.querySelector('.s23-app-video');

  // Function to update the timeline's width
  const updateTimelineWidth = () => {
    const videoDuration = video.duration;
    const currentTime = video.currentTime;
    const percentagePlayed = (currentTime / videoDuration) * 100;

    // Ensure it doesn't exceed 100%
    const width = Math.min(percentagePlayed, 100) + '%';
    timeline.style.width = width;
  };

  video.addEventListener('play', () => {
    // When video starts, ensure the timeline grows
    timeline.style.animation = 'grow 60s linear infinite';
  });

  video.addEventListener('pause', () => {
    // When video is paused, remove the growing animation and keep it at its current width
    timeline.style.animation = 'none';
  });

  video.addEventListener('timeupdate', updateTimelineWidth);

  timeline.addEventListener('animationiteration', () => {
    timeline.style.animation = 'none';
    timeline.style.width = '10%';
    setTimeout(() => {
      timeline.style.animation = 'grow 60s linear infinite';
    }, 350);
  });
}

initGrowingTimeline();


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

  slowerApp();
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
