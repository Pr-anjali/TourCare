const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '34d6c4341emshe8180fcb64339bep15ef5djsn4a6fafb7f85e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kurukshetra', options)
	.then(response => response.json())
	.then ((response) => {
        
        console.log(response) 
        
         var temp = response.temp
         
         var feelsLike= response.feels_like
         
        var humid = response.humidity 
        console.log(humid<=83);
        if(humid<=83)
        {
            weatherDesc.innerHTML="It's going to be foggy today!<br>Try travelling using public transportation or by walking;)"
        }
        else if(humid<=100)
        {
            weatherDesc.innerHTML="It's going to be rainy today!<br>Do carry an umbrella;)"
        }
        else if(temp<68)
        {
            weatherDesc.innerHTML="Its pretty cold today!<br>Make sure to deck your self in the warmest sweaters;)"
        }
        else if(temp>77)
        {
            weatherDesc.innerHTML="Its sunny and pleasent today!<br>A great day to take yourself on a date;)"
        }
        else if(temp<113)
        {
            weatherDesc.innerHTML="Its pleasent outside!<br>Wear cotton clothes and light woolens;)"
        }
        else if(temp<=86)
        {
            weatherDesc.innerHTML="Its hot today!<br>Make sure to wear light cotton clothes;)"
        }
        else{
            weatherDesc.innerHTML="Pleasent day to die!"
        }
     

    })
    

	.catch(err => console.error(err));
    
 