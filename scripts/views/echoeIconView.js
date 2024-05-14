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
          displayData(data); // Call a function to display the data
      })
      .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
      });
});

function displayData(data) {
    data.Echoes.forEach(echoe => {
        // Paragraph
        let paragraph = document.createElement("p");
        let textNode = document.createTextNode(echoe.name);
        paragraph.appendChild(textNode);

        // Image
        let image =  document.createElement("img");
        image.src = echoe.image;
        image.style.width = "150px";
        image.style.height = "150px";

        // Ajouter au containe
        let container = document.getElementById("echoesContent")
        container.appendChild(paragraph);
        container.appendChild(image);
    });
}
