var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
		// default (when user goes to page)
		getInitialState: function(){
			return{
				location: 'Miami',
				temp: 88
			}
		},
		// parent function
		// grabing data from input field and displaying in parent field
		handleSearch:function(location){
		// take objects of attributes we want to set
		this.setState({
			location: location,
			temp: 23
		});
	},
	// renders temp and location into the screen
	render:function(){
		var {temp, location} = this.state;

		return(
			<div>
				<h3> Weather Component</h3>
				<WeatherForm onSearch={this.handleSearch}></WeatherForm>
				<WeatherMessage temp={temp} location={location}></WeatherMessage>
			</div>
		)
	}
});

module.exports = Weather;
