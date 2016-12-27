var React = require('react');

// stateless function since this simple component only renders to screen
// can use stateless function because they only define the render method and don't maintain any state
var Examples = (props) => {
	return(
		<div>
			<h3>Examples</h3>
			<p>Welcome to examples page!</p>
		</div>
	)
}

module.exports = Examples;
