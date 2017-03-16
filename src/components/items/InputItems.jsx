var React = require('react');
var ReactDom = require('react-dom');

var InputItem = React.createClass({
    getInitialState:function(){
      return{
          value: ''
      }
    },
    getValue:function(){
        return this.state.value
    },
    onChange:function(event){
        console.log(event.target.value);
        this.setState({
            value: event.target.value
        })
    },
    render: function(){
        return (
            <input
                type="text"
                onChange={this.onChange}
                value={this.state.value}/>
        );
    }
});

module.exports = InputItem;