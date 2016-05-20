var React = require('react');

var CalcTableInputCell = React.createClass({
  getInitialState: function(){
    return({value:""});
  },
  onChange: function(e){
    this.setState({value:e.target.value});
  },
  createCell: function(){
    if(this.props.addon){
      if(this.props.addon== '$')
        return (
          <div className="input-group">
            <span className="input-group-addon"> $ </span>
            <input className="form-control" name={this.props.name} onChange={this.onChange} value={this.state.value} placeholder={this.props.placeholder} />
          </div>
        )
      else if(this.props.addon == '%')
        return (
          <div className="input-group">
            <input className="form-control" name={this.props.name} onChange={this.onChange} value={this.state.value} placeholder={this.props.placeholder} />
            <span className="input-group-addon"> % </span>
          </div>
        ) 
      else
        return (<div><input className="form-control" name={this.props.name} onChange={this.onChange} value={this.state.value} placeholder={this.props.placeholder} /></div>)
    }
    else{
      return (<div><input className="form-control" name={this.props.name} onChange={this.onChange} value={this.state.value} placeholder={this.props.placeholder} /></div>)
    }
  },
  render: function(){
    return(
      <td>
        {this.createCell()}
      </td>
    );
  }
});

module.exports = CalcTableInputCell;