var React = require('react');
var Link = require('react-router').Link

var NavbarItem = React.createClass({
  render: function(){
      return(
        <div className="navbar-item">
          <Link className="navbar-item-text" to={this.props.path}> {this.props.name} </Link>
        </div>
      );
  }
});

module.exports = NavbarItem;
