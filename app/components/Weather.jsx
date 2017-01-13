var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
		// default (when user goes to page)
		getInitialState: function(){
			return{
				/*
					by default, loading is false until it fetches data and sets it to true
					once it has fetched the data, it will go back to false
				*/
				isLoading: false
			}
		},
		/*
			parent function
			grabs data from input field (in this case 'onSearch') and displaying in parent field
		*/
		handleSearch:function(location){
			var that = this;

			// takes objects of attributes we want to set
			this.setState({
				isLoading:true, // when someone starts search, loading is set to true
				errorMessage: undefined, // clears out any error messages from previous searches
				// clears out location and temp to clean up data once search has been found
				location: undefined,
				temp: undefined
			});

			/*
				take objects of attributes we want to set
				Axios (3rd party library to fetch data) that makes it easy to request API
			*/
			OpenWeatherMap.getTemp(location).then(function(temp){
				that.setState({
					location: location,
					temp: temp,
					isLoading: false // sets to false once data has been fetched successfully
				});
			}, function (e){
				that.setState({
					isLoading: false, // sets to false once data has been fetched not successfully
					errorMessage: e.message // find the message to display
				});
			});
	},
	componentDidMount: function(){
		var location = this.props.location.query.location;

		// if there is a location and the location value is more than just an empty string
		if(location && location.length > 0){
			// use 'handleSearch' to pass in the location
			this.handleSearch(location);

			// remove after location has been successfully searched for
			// '#/' is the root of our location
			window.location.hash = '#/';
		}
	},
	componentWillReceiveProps: function(newProps){
		var location = newProps.location.query.location;

		if(location && location.length > 0){
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	},
	render:function(){
		// pass into WeatherMessage as props and renders into screen
		var {isLoading, temp, location, errorMessage} = this.state;

		function renderMessage(){
			// if isLoading is true
			if(isLoading){
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if(temp && location){ // if temp & location both exists
				return <WeatherMessage temp={temp} location={location}></WeatherMessage>
			}
		}

		function renderError(){
			// if state is set a string
			if(typeof errorMessage === 'string'){
				return(
					<ErrorModal message={errorMessage}/> // return instance of error modal
				)
			}
		}

		return(
			<div>
				<h1 className="text-center page-title"> Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}></WeatherForm>
				{renderMessage()}
				{renderError()}
			</div>
		)
	}
});

module.exports = Weather;
