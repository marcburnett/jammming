import React from 'react';


import './BusinessList.css';

import Business from './Business.js';

class BusinessList extends React.Component{
	render()
	{
		return (	
	<div className="BusinessList">
	{this.props.businesses.map(business => <Business key='business.id'/>)}
	</div>
				)
	}
}

export default BusinessList;

