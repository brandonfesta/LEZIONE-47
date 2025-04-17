async function getArtists(){
    try {
        let response = await fetch("http://localhost:4000/api/artists/");
        if(response.status === 404){
            throw new Error("cannot get artists");
        }
        let artists = await response.json();
        return artists;
    } catch(error){

    }
    
}

async function getArtist(artistId){
    try {
        let response = await fetch(`http://localhost:4000/api/artists/${artistId}`);
        if(response.status === 404){
            throw new Error("band not found")
        }
        let artist = await response.json();
        return artist;
    } catch (error){
        console.log(error)
    }
}

export {getArtists, getArtist}