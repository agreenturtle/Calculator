var React = require('react');

var CalcTableCell = React.createClass({
  render: function(){
    var tdStyle={
      'backgroundColor': this.props.color
    }
    return(
        <td style={tdStyle}>
          {this.props.text}
        </td>
    );
  }
});

module.exports = CalcTableCell;