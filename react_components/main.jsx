/** @jsx React.DOM */

var React = require('react/addons');
var App = require('./app.jsx');

window.onload = function() {
  var ele = document.createElement('div');
  document.body.appendChild(ele);
  React.render(<App />, ele);
};