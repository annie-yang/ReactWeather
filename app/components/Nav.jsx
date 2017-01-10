// require library
var React = require('react');

/*
	'Link' easily switch pages between links for nav
	'IndexLink' prevents multiple pages from being active
		EX: bold
*/
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	onSearch: function(e){ // 'e' is event handler
		e.preventDefault(); // prevent page from refreshing

		var location = this.refs.search.value; // grabbing 'location' value

		// encodes location
		var encodedLocation = encodeURIComponent(location);

		// if valid location
		if(location.length > 0){
			this.refs.search.value = ''; // clear fields value

			// brings to homepage
			window.location.hash = '#/?location=' + encodedLocation;
		}
	},
	/*
		Link tag allows custom styles and classes to the link
		'IndexLink' makes sure the main link is not bold when other active links are clicked (since the path 'to="/"' is always active in main link)
		'activeClassName' makes the certain links active when clicked
		'activeStyle' styles the links
			'fontWeight' bolds the links when clicked
	*/
	render:function(){
		return(
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">React Weather</li>
						<li>
							<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
						</li>
						<li>
							<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
						</li>
						<li>
							<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
						<ul className="menu">
							<li>
								<input type="search" placeholder="Search weather by city" ref="search"></input>
							</li>
							<li>
								<input type="submit" className="button" value="Get weather"></input>
							</li>
						</ul>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = Nav;
