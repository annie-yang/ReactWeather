var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
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
			this.setState({
				isLoading:true,
				errorMessage: undefined
			});

			// take objects of attributes we want to set
			// Axios (3rd party library to fetch data) npm module that makes it easy to request API
			OpenWeatherMap.getTemp(location).then(function(temp){
				that.setState({
					location: location,
					temp: temp,
					isLoading: false
				});
			}, function (e){
				that.setState({
					isLoading: false,
					errorMessage: e.message
				});
			});
	},
	// renders temp and location into the screen
	render:function(){
		var {isLoading, temp, location, errorMessage} = this.state;

		function renderMessage(){
			if(isLoading){ // set to true
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if(temp && location){ // if temp & location both exists
				return <WeatherMessage temp={temp} location={location}></WeatherMessage>
			}
		}

		function renderError(){
			if(typeof errorMessage === 'string'){
				return(
					<ErrorModal message={errorMessage}/>
				)
			}
		}

		return(
			<div>
				<h1 className="text-center"> Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}></WeatherForm>
				{renderMessage()}
				{renderError()}
			</div>
		)
	}
});

module.exports = Weather;
