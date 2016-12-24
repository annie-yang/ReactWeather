// calling Axios library
var axios = require('axios');

// constant variable that can't be altered
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f8e48cbded74ae4e049eee0763ffd1e0&units=imperial';

module.exports = {
	getTemp: function(location){
		var encodedLocation = encodeURIComponent(location);

		// build URL
		// query strings
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		// make request
		// set up call and handle response
		return axios.get(requestUrl).then(function(res){
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}else{
				return res.data.main.temp;
			}
		}, function(res){
			throw new Error(res.data.message);
		});
	}
}
