// require libraries
var React = require('react');
var ReactDOM = require('react-dom');

// 'react-router' library
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//components
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

/*
	loader foundation
	EX: 'css!' is a css loader
*/
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// load sass
require('style!css!sass!applicationStyles')

ReactDOM.render(
	/*
		'react-router' library defines individual routers
		'Router' needs to know which tracking it needs to do
		'component' renders every single page
		'IndexRoute' if the path doesn't recognize other links, then go to the index route
	*/
	<Router history={hashHistory}>
		  <Route path="/" component={Main}>
			<Route path="about" component={About}></Route>
			<Route path="examples" component={Examples}/>
			<IndexRoute component={Weather}></IndexRoute>
		</Route>
	</Router>,
	document.getElementById('app')
);
