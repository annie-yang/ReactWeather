var React = require('react');

/*
	stateless function since this simple component only renders to screen
	and they only define the render method and don't maintain any state
*/
var About = (props) => {
	return(
		<div>
			<h1 className="text-centered page-title"> About</h1>
			<p>This is a weather application built on React.</p>
			<p>Here are some of the tools I used:</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used
				</li>
				<li>
					<a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to seartch for weather data by city name.
				</li>
			</ul>
		</div>
	)
};

module.exports = About;
