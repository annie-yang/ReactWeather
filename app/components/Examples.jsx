var React = require('react');

// stateless function since this simple component only renders to screen
// can use stateless function because they only define the render method and don't maintain any state
var Examples = (props) => {
	return(
		<h3>Examples Component</h3>
	)
}

module.exports = Examples;
