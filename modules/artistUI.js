
let artistsContainer = document.getElementById("artists-container");

export function renderArtist(artist){
    
    let artistContainer = document.createElement("article");
    let artistImage = document.createElement("img")
    let artistTitle = document.createElement("h2");
    artistTitle.textContent = artist.name;
    artistImage.src = "http://localhost:4000/" + artist.image;

    artistContainer.append(artistImage);
    artistContainer.append(artistTitle);

    artistsContainer.append(artistContainer);

}