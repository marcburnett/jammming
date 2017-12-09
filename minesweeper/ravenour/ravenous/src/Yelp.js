const clientId = 'DfmxyeBXUtSGmkfLCPdEJw';
const secret = 'I2rjdF33u3Yz8VfTE9C459dz30CZpbqGrlxjPMBtqhGzBAsf4oIwJe2BHSWuPeBU';
let accessToken = '';

export let Yelp = {
	getAccessToken()
	{
		if(accessToken)
		{return new Promise(resolve => resolve(accessToken));}
		
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`,
		{method: 'POST'}).then(response => { return response.json();}).then(jsonResponse => {
  
	accessToken = jsonResponse.access_token;
	console.log(accessToken);
	
	});
			
	},	

	search(term, location, sortBy)
	{
		return Yelp.getAccessToken().then(() => {return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
			{headers: {Authorization: `Bearer ${accessToken}`}
			
			});
			
	}).then(jsonResponse => {
  
	if (jsonResponse.businesses) 
		
	
	{
		console.log({jsonResponse});
		
		return jsonResponse.businesses.map((business) => 
		{
			return{
						id: business.id,
						imageSrc: business.image_url,
						name: business.name,
						address: business.address,
						city: business.city,
				
					}
		});
	}
	
	});
	}

}