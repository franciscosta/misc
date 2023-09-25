
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
    console.error("Failed to get user location:", error);
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

// -----------------------
// Update the dreamscape on load

async function updateDreamscapeOnLoad() {
  const location = await getUserLocation();
  updateDreamscape(location);

  const dreamscape = document.querySelector('.s23-dreamscape');
  dreamscape.style.backgroundImage = `url("${listsContent[0].dreamscape}")`;
}

document.addEventListener('DOMContentLoaded', updateDreamscapeOnLoad);
