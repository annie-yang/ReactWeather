var React = require('react');
var {Link} = require('react-router');

// stateless function since this simple component only renders to screen
// can use stateless function because they only define the render method and don't maintain any state
var Examples = (props) => {
	return(
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Here are a few example locations to try out:</p>
			<ol>
				<li>
					<Link to='/?location=Salinas'>Salinas, CA</Link>
				</li>
				<li>
					<Link to='/?location=SanFrancisco'>San Francisco, CA</Link>
				</li>
			</ol>
		</div>
	)
}

module.exports = Examples;
