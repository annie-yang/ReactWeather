var React = require('react');

// creates link router for nav bar
var {Link, IndexLink} = require('react-router');

// differentiate which links are active
// 'IndexLink' makes sure the main link is not bold when other active links are clicked (since the path 'to="/"' is always active in main link)
// 'activeClassName' makes the certain links active when clicked
var Nav = React.createClass({
	render:function(){
		return(
			<div>
				<h2>Nav Component</h2>
				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
				<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
				<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
			</div>
		);
	}
});

module.exports = Nav;
