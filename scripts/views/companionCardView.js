/* export default class CompanionView {

    constructor () {

    }

    fetchingCompanions() {
        document.addEventListener('DOMContentLoaded', () => {
          const jsonPath = '../data/data_Cards_Companions.json';
        
          fetch(jsonPath)
              .then(response => {
                  if (!response.ok) {
                      throw new Error('Network response was not ok ' + response.statusText);
                  }
                  return response.json();
              })
              .then(data => {
                  displayCompanionData(data);
              })
              .catch(error => {
                  console.error('There has been a problem with your fetch operation:', error);
              });
        });
    }

    displayCompanionData(data) {
        data.Companions.forEach(companion => {
            // Paragraph
            let paragraph = document.createElement("p");
            let textNode = document.createTextNode(companion.name);
            paragraph.appendChild(textNode);
    
            // Image
            let image =  document.createElement("img");
            image.src = companion.image;
            image.style.width = "150px";
            image.style.height = "200px";
    
            // Ajouter au containe
            let container = document.getElementById("companionContent") // refacto pour créer la div ici et push dans le body direct ou dans une div body avec header footer etc
            container.appendChild(paragraph);
            container.appendChild(image);
        });
    }
}
 */