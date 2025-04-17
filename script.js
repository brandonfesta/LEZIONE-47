async function getArtists(){
    let response = await fetch("http://localhost:4000/api/artists/");
    let artists = await response.json();
    console.log(artists)
}

async function getArtist(artistId){
    try {
        let response = await fetch(`http://localhost:4000/api/artists/${artistId}`);
        if(response.status === 404){
            throw new Error("band not found")
        }
        let artist = await response.json();
        console.log(artist)
    } catch (error){
        console.log(error)
    }
}

getArtists();
getArtist("6643b1688c94709aaaa9db7f");