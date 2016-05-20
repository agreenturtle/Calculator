var React = require('react');
var Navbar = require('../../Navbar/Navbar.jsx');

var Home = React.createClass({
  render: function(){
    return (
      <div>
        <Navbar />
        <div className="content-body">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Home;
