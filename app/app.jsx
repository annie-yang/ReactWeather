var React = require('react');
var ReactDOM = require('react-dom');

// creates new variable and access the route property
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//components
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// load foundation
// 'css!' is a css loader
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
	//router library
	// 'Main' component always gets rendered due to matching the route path
	// hashHistory uses '#' followed by route
	// 'IndexRoute' if the path doesn't recognize other links, then go to the index route path within the 'Main' component
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={About}></Route>
			<Route path="examples" component={Examples}/>
			<IndexRoute component={Weather}></IndexRoute>
		</Route>
	</Router>,
	document.getElementById('app')
);
