import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: [
        { task: "Wash Dishes", id: 0, completed: false },
        {
          task: "Do Laundry",
          id: 1,
          completed: false,
        },
      ],
    };
  }

  toggleTask = (taskId) => {
    this.setState({
      todoList: this.state.todoList.map((task) => {
        if (task.id === taskId)
          return {
            ...task,
            completed: !task.completed,
          };
      }),
    });
  };

  clearTask = () => {
    this.setState({
      todoList: this.state.todoList.filter((task) => {
        return !task.completed;
      }),
    });
  };

  addTask = (taskName) => {
    this.setState([
      ...this.state.todoList,
      { task: "", taskName, id: Date.now(), completed: false },
    ]);
  };

  render() {
    return (
      <div>
        <h2>Today's Tasks</h2>
        <TodoForm todo={this.state.todoList} addTask={this.addTask} />
        <TodoList
          todo={this.state.todoList}
          toggleTask={this.toggleTask}
          clearTask={this.clearTask}
        />
      </div>
    );
  }
}

export default App;
