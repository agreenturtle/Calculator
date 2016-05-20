var React = require('react');
var SelectOption = require('./SelectOption.jsx');

var CalcTableSelectCell = React.createClass({
  render: function(){
    var createOptions = function(obj, index){
      return <SelectOption key={index} value={obj.value} text={obj.text} />
    }
    return(
      <td>
        <select className="form-control" name={this.props.name}>
          {this.props.options.map(createOptions)}
        </select>
      </td>
    );
  }
});

module.exports = CalcTableSelectCell;