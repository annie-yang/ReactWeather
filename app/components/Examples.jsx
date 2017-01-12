var React = require('react');

// Need to include react-router, since added 'Link' component
var {Link} = require('react-router');

/*
	stateless function, since this simple component only renders to screen
	only defines the render method and don't maintain any state
*/
var Examples = (props) => {
	return(
		<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>Here are a few example locations to try out:</p>
			<ol>
				<li>
					<Link to='/?location=Salinas'>Salinas, CA</Link>
				</li>
				<li>
					<Link to='/?location=San Francisco'>San Francisco, CA</Link>
				</li>
			</ol>
		</div>
	)
}

module.exports = Examples;
