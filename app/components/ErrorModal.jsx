var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
	getDefaultProps:function(){
		return{
			title: 'Error' // default title
		};
	},
	// way to define which properties the components expects, whether it's a string, number, function, or whether it's required
	propsTypes:{
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired // required
	},
	/*
		gets called after the method is ever rendered
		used to open modal
	*/
	componentDidMount:function(){
		var{title, message} = this.props; // pull props off from 'this.props'

		var modalMarkup = (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>{message}</p>
				<p>
					<button className="button hollow" data-close="">
						Okay
					</button>
				</p>
			</div>
		);

		var $modal = $(ReactDOMServer.renderToString(modalMarkup));
		$(ReactDOM.findDOMNode(this)).html($modal);

		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render:function() {
		return(
			<div></div>
		);
	}
});

module.exports = ErrorModal;
