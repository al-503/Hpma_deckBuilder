export default class EchoeView {

    constructor () {

    }

    fetchingEchoes() {
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
                  displayEchoeData(data); // Call a function to display the data
              })
              .catch(error => {
                  console.error('There has been a problem with your fetch operation:', error);
              });
        });
    }

    displayEchoeData(data) {
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
    
            // Ajouter au container
            let echoeContainer = document.getElementById("companionContent") // refacto pour créer la div ici et push dans le body direct ou dans une div body avec header footer etc
            echoeContainer.appendChild(paragraph);
            echoeContainer.appendChild(image);
            echoeContainer.appendChild(paragraph);
            echoeContainer.appendChild(image);
        });
    }
}
