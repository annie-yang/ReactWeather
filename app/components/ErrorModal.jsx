var React = require('react');

var ErrorModal = React.createClass({
	getDefaultProps:function(){
		return{
			title: 'Error'
		};
	},
	propsTypes:{
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},
	// gets called after the method is ever rendered
	componentDidMount:function(){
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render:function() {
		var{title, message} = this.props;

		return(
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
	}
});

module.exports = ErrorModal;
