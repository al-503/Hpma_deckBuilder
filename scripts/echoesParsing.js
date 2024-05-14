// app.js exemple TODO rename 
document.addEventListener('DOMContentLoaded', () => {
  // Relative path to the JSON file
  const jsonPath = '../data/data_Echoes.json';

  fetch(jsonPath)
      .then(response => {
          // Check if the response is OK (status code 200)
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json(); // Parse the JSON from the response
      })
      .then(data => {
          //console.log(data); // Handle the JSON data
          displayData(data); // Call a function to display the data
      })
      .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
      });
});

function displayData(data) { // need to change this function for make tile
  const content = document.getElementById('echoesContent');
  content.innerHTML = JSON.stringify(data, null, 2); // Display the JSON data in a pretty format
}
