import { deleteArtist } from "./artistApi.js";
import { backendUrl } from "./constants.js";

export function renderArtist(artist, container, handleDeleteArtist){
    
    let artistContainer = document.createElement("article");
    let artistImage = document.createElement("img")
    let artistTitle = document.createElement("h2");
    artistTitle.textContent = artist.name;
    artistImage.src = backendUrl + artist.image;

    let deleteArtistButton = document.createElement("button");
    deleteArtistButton.textContent = "Delete Artist";

    deleteArtistButton.addEventListener("click", () => {
        handleDeleteArtist(artist._id);
    })

    artistContainer.append(artistImage);
    artistContainer.append(artistTitle);
    artistContainer.append(deleteArtistButton);

    container.append(artistContainer);

}