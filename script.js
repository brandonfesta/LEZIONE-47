import { getArtists, getArtist, deleteArtist } from "./modules/artistApi.js";
import { renderArtist } from "./modules/artistUI.js";

let artistsContainer = document.getElementById("artists-container");

async function createArtistCards(){
    artistsContainer.innerHTML = "";
    let artists = await getArtists();
    artists.map(artist => {
        renderArtist(artist, artistsContainer, handleDeleteArtist)
    })
}

createArtistCards();

function handleDeleteArtist(id){
    deleteArtist(id).then(data => {
        createArtistCards()
        alert(data.message)
    })
}
// deleteArtist(artist._id)
// alert(artist.name + " cancellato")
// container.innerHTML = "";