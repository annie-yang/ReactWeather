// load library
var React = require('react');

// check location to make sure it's valid, and if it is, call the parent onSearch function (in this case: handleSearch is the parent function)
var WeatherForm = React.createClass({
	// this function will get called when the user clicks 'Get Weather' button
	onFormSubmit: function(e){ 	// 'e' is event that passes onto 'onFormSubmit'
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
					<input type="search" ref="location" placeholder="Search weather by city"></input>
					<button className="button expanded hollow">Get Weather</button>
				</form>
			</div>
		);
	}
});

module.exports = WeatherForm;
