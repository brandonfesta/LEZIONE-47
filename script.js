import { getArtists, getArtist, deleteArtist } from "./modules/artistApi.js";

let artistsContainer = document.getElementById("artists-container");

async function createArtistCards(){
    let artists = await getArtists();

    artists.map(artist => {
        let artistContainer = document.createElement("article");
        let artistTitle = document.createElement("h2");
        artistTitle.textContent = artist.name;

        artistContainer.append(artistTitle);
        artistsContainer.append(artistContainer)
    })
}

createArtistCards();