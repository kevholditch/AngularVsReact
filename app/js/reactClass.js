var ReactResults = React.createClass({
  render: function() {

  	var results = [];

  	for(var i=0; i<this.props.array.length; i++){
  		results.push(React.DOM.p({}, 'Hello'))
  	}

    return React.DOM.div({}, results);
  }
});