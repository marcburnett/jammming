
import './TrackList.js';


//let request = require('request'); // "Request" library
 
let clientId = '87c440d0e72947cd914290f6d91bca3f'; // Your client id
//let client_secret = 'bb6e760903a9442e9f9c443063350ff0'; // Your client secret
let redirectUri = 'http://localhost:3000/callback'; // Your redirect uri
let accessToken = '';


export const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    } 
  },
  
    search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
		})
		
	.then(jsonResponse => jsonResponse.json())
	.then(jsonR => (jsonR.tracks.items))
	.catch((err) => console.log(err))
		
	//	.then(response => {
   //   return response.json();
	//	}).then(jsonResponse => 
		
	
	//{
      //if (!jsonResponse.tracks) {
       //  jsonResponse.tracks.items)
     // }
	 //let result = jsonResponse.tracks.items[0];
	  //let result = jsonResponse.tracks.items;
	 // console.log(result[0].name);
	 // let name=[];
	 // for (let i = 0; i<10; i++)
	 // {name.push(result[i].name)  
	  //}
	  //console.log(jsonResponse.tracks.items);
	 // let happy = result.toString();
	  //console.log('Happ '+happy);
	  
	  //Spotify.value();
	  //return happy;
	 
	 // for (let i = 0; i<2; i++){
	  //return('Track Name = '+result[i].name+' Album = '+jsonResponse.tracks.items[i].album.name+' Artists Name = '+jsonResponse.tracks.items[i].artists[0].name );
	 //}
      
	 
	 // .map(track => (
		//  <div>
        
		//<h3>{track.name}</h3>
       // <p>track.artists[0].name</p>
		//<p>track.album.name</p>
		
		
       
		//</div>
      //)
	 // );
	  
	  
    
  }
  
}



export default Spotify;
