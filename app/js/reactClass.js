var ReactResults = React.createClass({
  render: function() {

  	var results = [];

  	for(var i=0; i<this.props.array.length; i++){
  		results.push(React.DOM.p({}, 'Hello'))
  	}

    return React.DOM.div({}, results);
  }
});

var ReactArray = React.createClass({
	getInitialState: function() {
	    return {items: [], amount:10};
	},	
	handleSubmit: function(e) {
		e.preventDefault();
		var a = [];		
		for(var i=0; i<this.state.amount; i++){
  			a.push({text: 'hello'});
  		}  		
    	this.setState({items: a });
  	},
  	onChange: function(e) {
    	this.setState({amount: parseInt($('#amountOfItems').val(), 10)});
  	},
  	clear: function(e) {
		e.preventDefault();		
    	this.setState({items: []});
  	},
  	render: function(){
  		                  
  		var results = [];
  		results.push(React.DOM.button({onClick:this.handleSubmit}, 'Run'));
  		results.push(React.DOM.input({onChange:this.onChange, id: 'amountOfItems', value:this.state.amount}))
  		results.push(React.DOM.button({onClick:this.clear}, 'Clear'));

	  	for(var i=0; i<this.state.items.length; i++){
	  		results.push(React.DOM.p({}, 'Hello'))
	  	}

	    return React.DOM.div({}, results);
  	}
});