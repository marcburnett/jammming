import React from 'react';
import Track from './Track.js';
import Tracklist from './TrackList.js';

import './SearchResults.js'



export default class SearchResults extends React.Component{
	
		
		render()
	{
			
	//console.log(this.props.searchR);
			
		return(
		<div>
 	<h2>Results</h2>
			{this.props.searchR.map(single => <Track tracks={single} />)}
			
	
		</div>
  
  )
			
	}
	
}