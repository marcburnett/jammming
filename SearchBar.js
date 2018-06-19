import React from 'react';
import './SearchBar.css';



export default class SearchBar extends React.Component {
		constructor(props){
	super(props)
	this.state = {
		term: ''		
		};

	
	}
	
	//	clicked()
	//{
		//this.setState({term: this.refs.textBox.value});
		//console.log('The button was clicked');
		//console.log(this.state.term);
		//Spotify.search(this.state.term);
				
	//}
	
	
	
	//handleTermChange(event)
	//{
	//	this.setState({term: event.target.value});
	//}
	
	
		render()
	{
		return(
		<div className="SearchBar">
  <input onChange = {this.props.pass1} 
  placeholder="Enter A Song, Album, or Artist" 
    />
 
  
	<a onClick = {this.props.pass2} >SEARCH</a>
	
</div>
);
	}
}