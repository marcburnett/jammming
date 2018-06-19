import React from 'react';
import './Playlist.css';
import TrackList from './TrackList.js';

export default class Playlist extends React.Component {
	
	constructor(props){
		super(props)
		 
		this.handleNameChange = this.handleNameChange.bind(this);
		//this.onNameChange = this.onNameChange.bind(this);
	}
	
	handleNameChange(newName)
	{
		this.props.onNameChange(newName);
	}
	
	render()
	{
		//console.log(this.props.searchR);
		return(
		<div className="Playlist">
  <input onChange={this.handleNameChange} placeholder={'New Playlist'} />
  
  <TrackList onRemove={this.props.onRemove} tracks={this.props.playlistTracks} />

  
	
	<a onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</a>

	<TrackList  />
</div>
);
	}
}