var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
		// default (when user goes to page)
		getInitialState: function(){
			return{
				// default, loading is false until it fetches data
				isLoading: false
			}
		},
		// parent function
		// grabing data from input field and displaying in parent field
		handleSearch:function(location){
			var that = this;

			// when someone starts search, loading is set to true
			this.setState({isLoading:true});

			// take objects of attributes we want to set
			// Axios (3rd party library to fetch data) npm module that makes it easy to request API
			OpenWeatherMap.getTemp(location).then(function(temp){
				that.setState({
					location: location,
					temp: temp,
					isLoading: false
				});
			}, function (errorMessage){
				that.setState({isLoading: false});
				alert(errorMessage);
			});
	},
	// renders temp and location into the screen
	render:function(){
		var {isLoading, temp, location} = this.state;

		function renderMessage(){
			if(isLoading){ // set to true
				return <h3>Fetching weather...</h3>;
			} else if(temp && location){ // if temp & location both exists
				return <WeatherMessage temp={temp} location={location}></WeatherMessage>
			}
		}

		return(
			<div>
				<h3> Weather Component</h3>
				<WeatherForm onSearch={this.handleSearch}></WeatherForm>
				{renderMessage()}
			</div>
		)
	}
});

module.exports = Weather;
