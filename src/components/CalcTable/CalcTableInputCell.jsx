var React = require('react');

var CalcTableInputCell = React.createClass({
  getInitialState: function(){
    return({value:""});
  },
  onChange: function(e){
    this.setState({value:e.target.value});
  },
  render: function(){
    return(
        <td>
          <input className="form-control" name={this.props.name} onChange={this.onChange} value={this.state.value} placeholder={this.props.placeholder} />
        </td>
    );
  }
});

module.exports = CalcTableInputCell;