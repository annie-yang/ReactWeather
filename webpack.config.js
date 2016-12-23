module.exports = {
	//where to start
	entry: './app/app.jsx',
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
		alias: {
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			Weather: 'app/components/Weather.jsx',
			About: 'app/components/About.jsx',
			Examples: 'app/components/Examples.jsx'
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
	}
};
