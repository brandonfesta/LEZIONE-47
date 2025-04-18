import { getArtists, getArtist, deleteArtist } from "./modules/artistApi.js";

let artistsContainer = document.getElementById("artists-container");

async function createArtistCards(){
    let artists = await getArtists();

    artists.map(artist => {
        let artistContainer = document.createElement("article");
        let artistImage = document.createElement("img")
        let artistTitle = document.createElement("h2");
        artistTitle.textContent = artist.name;
        artistImage.src = "http://localhost:4000/" + artist.image;

        artistContainer.append(artistImage);
        artistContainer.append(artistTitle);
        artistsContainer.append(artistContainer);
    })
}

createArtistCards();