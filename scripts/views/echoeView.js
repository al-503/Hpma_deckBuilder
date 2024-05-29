class EchoeView {
    render(data) {
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
            let echoeContainer = document.getElementById("echoesContent")
            echoeContainer.appendChild(paragraph);
            echoeContainer.appendChild(image);
            echoeContainer.appendChild(paragraph);
            echoeContainer.appendChild(image);
        });
    }
}
