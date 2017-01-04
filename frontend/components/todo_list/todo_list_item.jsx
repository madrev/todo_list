import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
  }

  handleRemove(e) {
    e.preventDefault();
    this.props.deleteTodo(this.props.todo);
  }

  toggleDone(e) {
    e.preventDefault();
    let newObj = Object.assign(this.props.todo);
    newObj.done = !newObj.done;
    this.props.updateTodo({todo: newObj});
  }

  doneButtonText() {
    return (this.props.todo.done ? "UNDO" : "DONE");
  }

  render() {
    return <li className="todo-list-item">
      <span>{this.props.todo.title}</span>
      <div className="li-buttons">
        <button onClick={this.handleRemove}>Remove</button>
        <button onClick={this.toggleDone}>{this.doneButtonText()}</button>
      </div>
  </li>;
  }

}

export default TodoListItem;
