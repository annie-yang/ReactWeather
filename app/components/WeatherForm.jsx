// load library
var React = require('react');

var WeatherForm = React.createClass({
	//this function will get called when the user clicks 'Get Weather' button
	// 'e' is event that passes onto 'onFormSubmit'
	onFormSubmit: function(e){
		e.preventDefault(); // prevent entire page from reloading

		// grab the data from the input text field and set to variable location (input is referenced from location in input field)
		var location = this.refs.location.value;

		// if valid location
		if(location.length > 0){
			// clear value in browser/input field
			this.refs.location.value = '';

			// pass in the location the user searched for
			this.props.onSearch(location);
		}
	},
	render:function(){
		return(
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" ref="location"></input>
					<button className="button expanded hollow">Get Weather</button>
				</form>
			</div>
		);
	}
});

module.exports = WeatherForm;
