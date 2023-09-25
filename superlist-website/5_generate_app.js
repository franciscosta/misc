
// ------------------------------------------------
// A. Creates the share element inside the app
// ------------------------------------------------

const avatarUrls = [
  "https://global-uploads.webflow.com/625593a881b8ebd169835ca5/64fa3fb9a17ddc5fdd291011_Rectangle%202899.jpg",
  "https://global-uploads.webflow.com/625593a881b8ebd169835ca5/64fa3fb851d65e51f39a0668_Rectangle%202900.jpg",
  "https://global-uploads.webflow.com/625593a881b8ebd169835ca5/64fa3fb9ec332357abbd9ebd_Rectangle%202901.jpg",
  "https://global-uploads.webflow.com/625593a881b8ebd169835ca5/64fa3fb96b77db1c6ed64f79_Rectangle%202902.jpg",
  "https://global-uploads.webflow.com/625593a881b8ebd169835ca5/64fa3fb805a98a90b6935a98_Rectangle%202903.jpg"
];

function createShareHTMLElement(avatarCount, moreUsersText) {

  // 1. Created the outer div
  const mainDiv = document.createElement('div');
  mainDiv.className = 's23-app-users-container';

  // 2. Loops through each avatar image up to the specified amount and appends it to the outer div
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

  // 3. Creates the extra string of text after the avatars div if necessary
  if (moreUsersText) {
    const moreUsersDiv = document.createElement('div');
    moreUsersDiv.className = 's23-users-more';
    moreUsersDiv.textContent = moreUsersText;
    mainDiv.appendChild(moreUsersDiv);
  }

  // 4. Returns the assembled HTML object
  return mainDiv;
}

// ------------------------------------------------
// B. Creates the title object inside the app
// ------------------------------------------------

function createTitleHTMLElement(text) {

  // 1. Creates the outer div
  const mainDiv = document.createElement('div');
  mainDiv.className = 's23-app-title-container';

  // 2. Create the inner div and set its text content
  const titleDiv = document.createElement('div');
  titleDiv.textContent = text;

  // 3. Appends the title div to the outer div
  mainDiv.appendChild(titleDiv);

  // 4. Returns the assembled HTML object
  return mainDiv;
}

// ------------------------------------------------
// C. Creates a paragraph object inside the app
// ------------------------------------------------

function createParagraphHTMLElement(text) {
  
  // 1. Creates the outer div
  const mainDiv = document.createElement('div');
  mainDiv.className = 's23-app-item s23-app-paragraph';

  // 2. Creates the text block div
  const textBlock = document.createElement('div');
  textBlock.className = 's23-in-app-text';
  textBlock.textContent = text;

  // 3. Appends the text block to the outer div
  mainDiv.appendChild(textBlock);

  // 4. Returns the assembled HTML object
  return mainDiv;
}

// ------------------------------------------------
// D. Creates a task object inside the app
// ------------------------------------------------

function createTaskHTMLElement(text, completed, metadataBool, image2 = null, image3 = null) {

  // 0. Utility function to create HTML objects with classes
  function createElementWithAttributes (tag, attributes) {
      const element = document.createElement(tag);
      for (const [key, value] of Object.entries(attributes)) {
          element.setAttribute(key, value);
      }
      return element;
  };

  // 1. Replicates the exact structure of task
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

  // 2. Assembles the elements together
  appCheckbox.appendChild(img1);
  checkboxContainer.appendChild(appCheckbox);
  textWrapper.appendChild(taskCompleted);
  taskCompleted.appendChild(completedStroke);
  contentContainer.appendChild(textWrapper);

  // 3. Completes the task if needed
  if (completed) {
    appCheckbox.classList.add('check-active');
    textWrapper.classList.add('text-active');
    taskCompleted.classList.add('strokethrough-active');
  }

  // 4. Adds metadata if needed
  if (metadataBool) {
      const metadata = createElementWithAttributes('div', { class: 's23-app-task-metadata' });
      const metadataBlog1 = createElementWithAttributes('div', { class: 's23-app-metadata-blog' });
      const metadataBlog2 = createElementWithAttributes('div', { class: 's23-app-metadata-blog' });
      metadata.appendChild(metadataBlog1);
      metadata.appendChild(metadataBlog2);
      contentContainer.appendChild(metadata);
  }

  // 5. Adds an integration image if supplied
  if (image2) {
      const img2El = createElementWithAttributes('img', {
          src: image2,
          loading: 'lazy',
          alt: '',
          class: 's23-v2-integration-in-task'
      });
      v2Metadata.appendChild(img2El);
  }

  // 6. Adds a user avatar image if supplied
  if (image3) {
      const img3El = createElementWithAttributes('img', {
          src: image3,
          loading: 'lazy',
          alt: '',
          class: 's23-v2-avatar-in-task'
      });
      v2Metadata.appendChild(img3El);
  }

  // 7. Assembles the object
  taskBody.appendChild(checkboxContainer);
  taskBody.appendChild(contentContainer);
  taskBody.appendChild(v2Metadata);
  root.appendChild(spacer1);
  root.appendChild(taskBody);
  root.appendChild(spacer2);

  // 8. Returns the assembled HTML object
  return root;
}

// 9. Calls the function once to set it up at the start
// soundifyCheckboxes();

// ------------------------------------------------
// E. Adds sound to the checkboxes
// ------------------------------------------------

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

// ------------------------------------------------
// F. Generates the entire HTML of a list (gets the content as an argument)
// ------------------------------------------------

function generateNewList(contentObject) {

  // 1. Gets the container where the list will be appended to
  const appBody = document.querySelector('.s23-app-body');
  if (!appBody) return;

  // 2. Fades that container out to make the changes
  appBody.classList.add('hidden');

  setTimeout(() => {

      // 3. Clears the existing content
      while (appBody.firstChild) {
          appBody.removeChild(appBody.firstChild);
      }

      // 4. Adds share element
      const shareElement = createShareHTMLElement(contentObject.avatars, contentObject.moreUsersText);
      appBody.appendChild(shareElement);

      // 5. Adds title element
      const titleObject = createTitleHTMLElement(contentObject.title);
      appBody.appendChild(titleObject);

      // 6. Loops through tasks / paragraphs and add each one
      contentObject.items.forEach(item => {
          if (item.type === "paragraph") {
              const paragraphObject = createParagraphHTMLElement(item.text);
              appBody.appendChild(paragraphObject);
          } else if (item.type === "task") {
              const taskObject = createTaskHTMLElement(item.text, item.completed, item.metadata, item.image2, item.image3);
              appBody.appendChild(taskObject);
          }
      });

      setTimeout(() => {

        // 8. Fades in the content
        appBody.classList.remove('hidden');

        // 9. Update dreamscaoe
        const dreamscape = document.querySelector(".s23-dreamscape");
        dreamscape.style.backgroundImage = `url(${contentObject.dreamscape})`;

        // 10. Re-enables the sound
        soundifyCheckboxes();

      }, 50);

  }, 300); 
}

// Generates the list at the start.
document.addEventListener('DOMContentLoaded', () => {
  generateNewList(listsContent[0]);
});


// ------------------------------------------------
// 
// ------------------------------------------------