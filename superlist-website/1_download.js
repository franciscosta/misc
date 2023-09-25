
// ------------------------------------------------
// A. UI Elements
// ------------------------------------------------

const widgetUI = {
  parent: document.querySelector('.s23-try-superlist-container'),
  expanded: document.querySelector('.s23-expanded-container'),
  collapsed: document.querySelector('.s23-collapsed-container'),
  closeButton: document.querySelector('.s23-try-close-button'),
}

const hugeDownloadButon = document.querySelector('.s23-huge-download-link');

// ------------------------------------------------
// B. CSS Classes
// ------------------------------------------------

const classes = {
  expanded: 'try-superlist-clicked-state',
  animation: 'snappy-animation'
}

widgetUI.parent.classList.add(classes.animation);
widgetUI.expanded.classList.add(classes.animation);
widgetUI.collapsed.classList.add(classes.animation);

// ------------------------------------------------
// C. Behavioral Functions
// ------------------------------------------------

function setInitialState() {
  widgetUI.expanded.style = "0px";
  widgetUI.collapsed.style = "195px";
  widgetUI.closeButton.style.opacity = '0';
}

function expandWidget() {
  widgetUI.parent.classList.add(classes.expanded);
  widgetUI.expanded.style.width = 'auto';
  widgetUI.collapsed.style.width = '0px';
  widgetUI.closeButton.style.opacity = '1';
}

function collapseWidget() {
  setInitialState();
  widgetUI.parent.classList.remove(classes.expanded);
}

// ------------------------------------------------
// D. Binds behavioral functions to user action
// ------------------------------------------------

function addClickEvents() {

  // 1. Adds functionality to the widget itself
  widgetUI.collapsed.addEventListener('click', expandWidget);
  widgetUI.closeButton.addEventListener('click', collapseWidget);  

  // 2. Adds the same functionality to the huge download at the bottom of the page
  hugeDownloadButon.addEventListener('click', expandWidget);
  
}

function addKeyDownEvents() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      collapseWidget();
    } else if (event.key === 'd' || event.key === 'D') {
      expandWidget();
    }
  });
}

// ------------------------------------------------
// E. Wrapper Functions
// ------------------------------------------------

function setUpDownloadWidget() {
  setInitialState();
  addClickEvents();
  addKeyDownEvents();
}

// ------------------------------------------------
// F. Function calls
// ------------------------------------------------

setUpDownloadWidget();