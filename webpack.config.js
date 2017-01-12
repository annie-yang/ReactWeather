// load webpack utilities
var webpack = require('webpack');

module.exports = {
	/*
		starting point
		use script loader to properly package for webpack
		array that loads jquery, css foundation, and original path
	*/
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'
	],
	// provide set of key value pairs, where key is module name and value is variable name we want available in external script files
	externals: {
		jquery: 'jQuery', // let foundation properly attach its methods to jQuery object
		foundation: 'Foundation'
	},
	/*
		create new provide plugin
		have webpack look at which variable names to look for
		takes in object of key value pairs, the key is variable name to watch for (in this case: '$' and 'jQuery') and value is module to replace it with (in this case: 'jquery')
	*/
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	//output
	output: {
		path: __dirname, //path to current folder
		filename: './public/bundle.js'
	},
	//resolve takes an extensions array
	// find any extensions that has either:
	// no extensions, .js, or .jsx
	resolve: {
		root: __dirname,
		// easy to root name
		// name our modules
		alias: {
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			Weather: 'app/components/Weather.jsx',
			About: 'app/components/About.jsx',
			Examples: 'app/components/Examples.jsx',
			WeatherForm: 'app/components/WeatherForm.jsx',
			WeatherMessage: 'app/components/WeatherMessage.jsx',
			OpenWeatherMap: 'app/api/OpenWeatherMap.jsx',
			ErrorModal: 'app/components/ErrorModal.jsx',
			applicationStyles: 'app/styles/app.scss'
		},
		extensions: ['', '.js', '.jsx']
		},
		module: {
		// telling babel loader to take our file
		loaders: [
		{
			loader: 'babel-loader',
			// parse through react
			// get output and run them through 3s2015
			query: {
				presets: ['react', 'es2015']
			},
			// tell it which file we want to apply the loader to
			// in this case, select every file that has a '.js' extension
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/
		}]
	},
	// create source maps for debugging purposes only to where the browser understands
	devtool: 'cheap-module-eval-source-map'
};
