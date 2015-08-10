/** @jsx React.DOM */

var React = require('react/addons');
var SideBar = require('./component/sidebar.jsx');
var MainPanel = require('./component/mainpanel.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <SideBar />
        <MainPanel />
      </div>
    );
  }
});