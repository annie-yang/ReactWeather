var React = require('react');

// creates link router for nav bar
var {Link} = require('react-router');

var Nav = React.createClass({
	render:function(){
		return(
			<div>
				<h2>Nav Component</h2>
				<Link to="/">Get Weather</Link>
				<Link to="/about">About</Link>
				<Link to="/examples">Examples</Link>
			</div>
		);
	}
});

module.exports = Nav;
