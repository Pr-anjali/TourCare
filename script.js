var weatherDesc;

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
       
        if(humid<=83)
        {
            weatherDesc="It's going to be foggy today!Try travelling using public transportation or by walking;)"
        }
        else if(humid<=100)
        {
            weatherDesc="It's going to be rainy today!Do carry an umbrella;)"
        }
        else if(temp<68)
        {
            weatherDesc="Its pretty cold today!Make sure to deck your self in the warmest sweaters"
        }
        else if(temp>77)
        {
            weatherDesc="Its sunny and pleasent today!A great day to take yourself on a date;)"
        }
        else if(temp<113)
        {
            weatherDesc="Its pleasent outside!Wear cotton clothes and light woolens;)"
        }
        else if(temp<=86)
        {
            weatherDesc="Its hot today!Make sure to wear light cotton clothes;)"
        }
        else{
            weatherDesc="Pleasent day to die!"
        }
    

        myFunction();
    })
    

	.catch(err => console.error(err));
    function myFunction() {
        alert(weatherDesc);
      }
      
    
 