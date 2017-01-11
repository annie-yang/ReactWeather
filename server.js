var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

// redirecting traffic
// request(index.html, or bundle.js), response (update what we get sent back), next (call when the middleware is done)
app.use(function(req, res, next){
	// if traffic is over 'http', if it is, call 'next' to move on
	// if equal to 'https', redirect them
	if(req.headers['x-forwarded-proto'] === 'https'){
		res.redirect('http://' + req.hostname + req.url);
	}else{ // move on
		next();
	}
});

app.use(express.static('public'));

app.listen(PORT, function () {
	console.log('Express server is up on port ' + PORT);
});
