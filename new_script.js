
// Test 321
// -------------------------
// Static data for each list

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
// Pre-load dreamscapes

Object.entries(dreamscapes).forEach(([key, value]) => {
  const img = new Image();
  img.src = value;
});

// -------------------------
// List content

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
      text: "Shinrin-yoku — Forrest Bathing",
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

  const usercaseButtons = document.querySelectorAll('.s23-usecase-button');

  // Reset all buttons to the default style by removing specific classes
  usercaseButtons.forEach(button => {
    button.classList.remove('app-launch', 'kitchen-reno', 'daily-habits');
    console.log('this run');
  });

  // Based on the list's title, add the appropriate class
  let targetClass = "";
  switch (list.title) {
    case "App Launch":
      targetClass = 'app-launch';
      break;
    case "Kitchen Reno":
      targetClass = 'kitchen-reno';
      break;
    case "Daily Habits":
      targetClass = 'daily-habits';
      break;
  }

  if (targetClass) {
    const button = document.querySelector(`.s23-ucb-${targetClass.charAt(0)}${targetClass.charAt(1)}`);
    if (button) {
      button.classList.add(targetClass);
    }
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

// -------------------------
// Clicks in header

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

// -------------------------
// Doodle underneath Superlist

const superlist_logo = document.querySelector('#superlist-logo');

const svgMarkup = `
<svg class="superlist-doodle" viewBox="0 0 301 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.38883 30.696C10.0254 24.0104 20.5139 9.19769 20.8827 14.1207C21.2516 19.0437 15.9502 37.5932 21.0582 34.3226C26.1663 31.052 40.8581 6.84813 42.4963 10.8509C44.1346 14.8537 33.4791 33.3919 37.028 33.1259C40.5768 32.86 58.4661 9.65425 63.3457 9.2886C68.2253 8.92296 49.4489 32.1952 54.3285 31.8296C59.2081 31.4639 75.6436 6.71688 81.977 7.89251C88.3104 9.06814 71.3084 32.2074 74.4136 31.9748C77.5188 31.7421 99.2776 6.59614 105.488 6.13077C111.698 5.66541 89.8168 29.1703 94.6964 28.8047C99.576 28.4391 116.257 6.974 122.912 6.47539C129.566 5.97679 111.553 27.5416 115.989 27.2092C120.425 26.8768 142.997 6.62058 147.753 4.61393C152.51 2.60729 138.17 25.5471 143.049 25.1815C147.929 24.8159 165.497 3.28432 167.272 3.15136C169.046 3.0184 159.585 25.5926 163.134 25.3267C164.503 25.2241 227.395 11.5855 298.4 6.72321" stroke="#6B66DA" stroke-width="4.95595" stroke-linecap="round"/>
</svg>
`;

superlist_logo.insertAdjacentHTML('beforeend', svgMarkup);

