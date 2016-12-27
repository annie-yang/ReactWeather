var React = require('react');
var Nav = require('Nav');
var About = require('About');
var Examples = require('Examples');

// stateless function since this simple component only renders to screen
// can use stateless function because they only define the render method and don't maintain any state
var Main = (props) => {
	return(
		<div>
			<Nav/>
			<div className="row">
				<div className="columns medium-6 large-4 small-centered">
					{props.children}
				</div>
			</div>
		</div>
	);
}

module.exports = Main;
