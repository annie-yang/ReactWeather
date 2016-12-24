var React = require('react');

var WeatherMessage = React.createClass({
	render:function(){
		var {temp, location} = this.props;

		return(
			<h3> It is {temp}ºF in {location}</h3>
		)
	}
});

module.exports = WeatherMessage;
