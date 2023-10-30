// Define your API key and Collection ID
const API_KEY = '4d688c98a68cdab9b3c8b786e71b9334719a5eb20e8d497b64d0aeef98adbe2f';
const COLLECTION_ID = '627d50981442f62edd183f3a';

// Set up the API endpoint
const endpoint = `https://api.webflow.com/collections/${COLLECTION_ID}/items`;

// Make the API request
fetch(endpoint, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'accept-version': '1.0.0',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  console.log(data.items); // This will log the items from the collection to the console
})
.catch(error => {
  console.error('There was an error fetching the collection:', error);
});
