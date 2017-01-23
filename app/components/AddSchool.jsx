var React = require("react");
var actions = require("../actions/SchoolActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          tagline:""
      }  
    },
    addSchool:function(e){
        e.preventDefault();
        actions.addSchool(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addSchool}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Task Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Task Name" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="tagline">Description:</label>
                    <input type="text" className="form-control" id="tagline" name="tagline" value={this.state.address} onChange={this.handleInputChange} placeholder="Description" />                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Task</button>
                </div>
            </form>
        )
    }
})