var React = require('react');
var ReactDOM = require('react-dom');

// creates new variable and access the route property
// react-router library
// object destructuring
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//components
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// load foundation
// 'css!' is a css loader
//require('./node_modules_folder/foundation-sites/dist/foundation.js');
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	// react-router library
	// define individual routers
	// 'component' renders every single page
	// 'Main' component always gets rendered due to matching the root path
	// hashHistory uses '#' followed by route
	// 'IndexRoute' if the path doesn't recognize other links, then go to the index route path within the 'Main' component
	// 'Router' needs to know which tracking it needs to do
	<Router history={hashHistory}>
		  <Route path="/" component={Main}>
			<Route path="about" component={About}></Route>
			<Route path="examples" component={Examples}/>
			<IndexRoute component={Weather}></IndexRoute>
		</Route>
	</Router>,
	document.getElementById('app')
);
