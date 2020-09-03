import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.todo);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="task"
          value={this.state.todo}
          onChange={this.handleChanges}
        ></input>
        <button>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;
