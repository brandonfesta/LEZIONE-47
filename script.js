import { getArtists, getArtist, deleteArtist } from "./modules/artistApi.js";

async function createArtistCards(){
    let artists = await getArtists();
}

createArtistCards();