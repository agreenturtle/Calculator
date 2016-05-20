var React = require('react');
var NavbarItem = require('./NavbarItem.jsx');
var Link = require('react-router').Link

var Navbar = React.createClass({
  render: function(){
      return (
        <header>
          <Link className="header-title" to="/"> <img src="/assets/images/steelhouse_logo.png" /> </Link>
        </header>
      );
  }
});

module.exports = Navbar;
