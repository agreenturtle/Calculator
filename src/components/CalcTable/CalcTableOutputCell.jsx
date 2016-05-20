var React = require('react');

var CalcTableOutputCell = React.createClass({
  getInitialState: function(){
    return({value:''});
  },
  clear: function(){
    this.setState({value:''});
  },
  calculate: function(){
    this.setState({value:'$$$'});
  },
  render: function(){
    var tdStyle = {
      'backgroundColor': this.props.color
    };
    return(
      <td style={tdStyle}>
        {this.state.value}
      </td>
    );
  }
});

module.exports = CalcTableOutputCell;