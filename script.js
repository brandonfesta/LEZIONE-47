import { getArtists, getArtist, deleteArtist } from "./modules/artistApi.js";
import { renderArtist } from "./modules/artistUI.js";

let artistsContainer = document.getElementById("artists-container");

async function createArtistCards(){
    let artists = await getArtists();
    artists.map(artist => renderArtist(artist, artistsContainer))
}

createArtistCards();