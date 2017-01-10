// calling Axios library
var axios = require('axios');

// constant variable that can't be altered
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f8e48cbded74ae4e049eee0763ffd1e0&units=imperial';

module.exports = {
	/*
		getTemp is going to take the location from 'WeatherForm' and return a promise
		return that data into 'Weather' file
	*/
	getTemp: function(location){
		// takes plain text string and encode it properly for the browser
		var encodedLocation = encodeURIComponent(location);

		/*
			build URL
			query strings - build strings by referencing what you want in the URL
		*/
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		/*
			axios.get makes request by taking URL and fetches it and brings back results
			set up call and handle response
		*/
		return axios.get(requestUrl).then(function(res){
			// error checking
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}else{
				return res.data.main.temp; // return temperature
			}
		}, function(res){
			throw new Error('Unable to fetch weather for that location.');
		});
	}
}
