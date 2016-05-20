var React = require('react');
var CalcTableCell = require('./CalcTableCell.jsx');
var CalcTableInputCell = require('./CalcTableInputCell.jsx');
var CalcTableSelectCell = require('./CalcTableSelectCell.jsx');
var CalcTableOutputCell = require('./CalcTableOutputCell.jsx');

var CalcTableRow = React.createClass({
  render: function(){
    var createCell = function(obj, index){
      if(obj.type == "cell"){
        return <CalcTableCell text={obj.text} color={obj.color} />
      }
      else if(obj.type == "input"){
        return <CalcTableInputCell name={obj.name} placeholder={obj.placeholder} />
      }
      else if(obj.type == "select"){
        return <CalcTableSelectCell options={obj.options} />
      }
      else if(obj.type == "output"){
        return <CalcTableOutputCell color={obj.color} />
      }
      else{
        return <td></td>;
      }
    }
    return(
        <tr>
          {this.props.row.map(createCell)}
        </tr>
    );
  }
});

module.exports = CalcTableRow;