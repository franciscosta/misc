
// -----------------------
// Static Assets

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

// -----------------------
// List content itself

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

// -----------------------
// Pre-load Static Assets

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

// -----------------------
// Update Dreamscape based on user location

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
}

getUserLocation().then(updateDreamscape);

// -----------------------
// Update the dreamscape on load

document.addEventListener('DOMContentLoaded', function() {
  const dreamscape = document.querySelector('.s23-dreamscape');
  if (dreamscape) {
      dreamscape.style.backgroundImage = `url("${listsContent[0].dreamscape}")`;
  } else {
      console.warn('Element .s23-dreamscape not found');
  }
});
