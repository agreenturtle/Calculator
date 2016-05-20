var React = require('react');
var CalcTableRow = require('./CalcTableRow.jsx');

var CalcTable = React.createClass({
  render: function(){
    var createRows = function(obj, index){
      return <CalcTableRow key={index} row={obj} />
    }
    var createHeaders = function(text, index){
      return (<th>{text}</th>)
    }
    var divClass = this.props.size;
    return(
      <div className={divClass}>
        <h4 className="table-name"> {this.props.table_name} </h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              {this.props.headers.map(createHeaders)}
            </tr>
          </thead>
          <tbody>
            {this.props.table.map(createRows)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = CalcTable;