var React = require('react');

// stateless function since this simple component only renders to screen
// can use stateless function because they only define the render method and don't maintain any state
var WeatherMessage = ({temp, location}) => {
	return(
		<h3> It is {temp}ºF in {location}</h3>
	)
};

module.exports = WeatherMessage;
