var React = require('react');
var ReactDom = require('react-dom');
var InputItem = require('../items/InputItems.jsx');

var InputBox = React.createClass({
    getInitialState:function(){
        return{
            msg:''
        }
    },
    onClick:function(event){
        if (this.refs.task.getValue() == ""){
            this.setState({
                msg: "Por favor ingresa un valor!!"
            })
        }else{
            this.setState({
                msg: "Okey!!"
            })
        }
    },
    render: function(){
        return (
            <div className="row">
                <InputItem ref="task"/>
                <button id="btn" type="button" onClick={this.onClick}>Aceptar</button>
                <label>{this.state.msg}</label>
            </div>
        );
    }
});

module.exports = InputBox;