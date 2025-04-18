import { deleteArtist } from "./artistApi.js";

export function renderArtist(artist, container){
    
    let artistContainer = document.createElement("article");
    let artistImage = document.createElement("img")
    let artistTitle = document.createElement("h2");
    artistTitle.textContent = artist.name;
    artistImage.src = "http://localhost:4000/" + artist.image;

    let deleteArtistButton = document.createElement("button");
    deleteArtistButton.textContent = "Delete Artist";

    deleteArtistButton.addEventListener("click", () => {
        deleteArtist(artist._id)
        alert(artist.name + " cancellato")
        
    })

    artistContainer.append(artistImage);
    artistContainer.append(artistTitle);
    artistContainer.append(deleteArtistButton);

    container.append(artistContainer);

}