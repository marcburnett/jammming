import React from 'react';
import './Track.css';

let isRemoval = false;
export default class Track extends React.Component{
	
	constructor(props){
		super(props)

		this.state = {
			playlistTracks: []
		}
		
		this.addTrack=this.addTrack.bind(this);
		this.removeTrack=this.removeTrack.bind(this);
	}
	
	
	
	renderAction()
	{
		if(isRemoval)
		
		{<a  onClick={this.removeTrack} className="Track-action">--</a>}
		else{<a  onClick={this.addTrack} className="Track-action">++</a> }
	}
	
	addTrack(track)
	{
		//if (track === this.state.playlistTracks)
		//{
			this.setState({playlistTracks: track})
		//}
	}
	
	removeTrack(track)
	{
		this.props.onRemove = this.props.item;
		
	}
	
	
	render()
	{
	//console.log(this.props.tracks);
	
		return(
		<div className="Track">
  <div className="Track-information">
 <h3>{this.props.tracks.name}</h3>
 <p>{this.props.tracks.artists[0].name} | {this.props.tracks.album.name}</p>
 
 
   </div>
   <a  onClick={this.addTrack} className="Track-action">+</a>
<div className>
   {this.state.playlistTracks}
  </div>
</div>
		);
	}
	
   
}