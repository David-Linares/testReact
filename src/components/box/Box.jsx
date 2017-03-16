var React = require('react');
var ReactDom = require('react-dom');
var InputBox = require('./InputBox.jsx');

var Box = React.createClass({
    render: function(){
        return (
          <div className="container">
              <InputBox/>
          </div>
        );
    }
});

module.exports = Box;