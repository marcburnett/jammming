import React from 'react';

//import logo from './logo.svg';

import './App.css';
import Playlist from './Playlist.js';
import SearchBar from './SearchBar.js';
import SearchResults from './SearchResults.js';
import {Spotify} from './Spotify.js';


	  
	  
class App extends React.Component 
{
	
	constructor(props){
	super(props)
	this.state = {
		searchResults: [],
		searchTerm: 'Mariah',
		playlistName: 'Happy',
		playlistTracks:[],
		
		}
	this.searchUpdate=this.searchUpdate.bind(this);
	this.spotify=this.spotify.bind(this);
	//this.getAccessToken=this.getAccessToken.bind(this);
	//this.search=this.search.bind(this);
	this.searchUpdate=this.searchUpdate.bind(this);
	this.removeTrack=this.removeTrack.bind(this);
	this.updatePlaylistName=this.updatePlaylistName.bind(this);
	
	}
	



 
	searchUpdate(event)
	{
		this.setState({searchTerm: event.target.value});
		Spotify.search(this.state.searchTerm);
	}
	
	spotify(event)
	{
		
	Spotify.search(this.state.searchTerm)
		console.log(this.state.searchResults);
		var res = Spotify.search(this.state.searchTerm);
		
		//this.setState({searchResults: res});
	
		res
		.then(value => this.setState({searchResults:value}))
	//	.then(value => this.setState({searchResults: value}))
		//.then(value => this.setState({businesses: value}))
  
  //.then(console.log(this.state.businesses[0]));
    .then(console.log(this.state.searchResults));

		
		
	//	.then(value => this.setState({businesses: value}))
  
   //       console.log(this.state.businesses[0])
}


  
  removeTrack(track)
	{
		this.state.playlistTracks.filter(trk => {
			return this.props.track.id !== trk.id;
		});
	}
  
  updatePlaylistName(name)
  {
	this.setState({playlistName: name})
  } 
  
  //savePlaylist() and ...
  //{
	//  let trackURIs = [];
  //}
  
  render() 
	{
		
	
    return (
   
  
	<div>
	 
	<h1>Ja<span className="highlight">mmm</span>ing</h1>
	<h5> Search term is: {this.state.searchTerm}</h5>
  <div className = "App">
	<SearchBar 
		 		
		pass1 = {this.searchUpdate} 
		pass2 = {this.spotify} />

   <div className="App-playlist">
	<SearchResults    searchR={this.state.searchResults}   />
	
	<Playlist onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} playlistName={this.state.playlistName} searchR={this.state.searchResults}/>
	</div>
	</div>
	</div>
	
	//playListTracks={this.state.playlistTracks} onSave={this.savePlaylist} />

	
 	
  );
	
}
}

export default App;