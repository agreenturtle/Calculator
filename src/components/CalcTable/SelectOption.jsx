var React = require('react');

var SelectOption = React.createClass({
  render: function(){
    return(
      <option value={this.props.value}> {this.props.text} </option>
    )
  }
});

module.exports = SelectOption;