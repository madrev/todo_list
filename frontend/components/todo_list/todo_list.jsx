import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';


class TodoList extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchTodos();
  }

  render(){
    return <div className="list-container">
      <h1>"do yer stuff"</h1>
      <ul>
         { this.props.todos.map( (todoItem, idx) => <TodoListItem
                                          todo={todoItem}
                                          deleteTodo={this.props.deleteTodo}
                                          updateTodo={this.props.updateTodo}
                                          key={idx}
                                           /> ) }
      </ul>
      <TodoForm createTodo={this.props.createTodo} errors={this.props.errors} />
    </div>;
  }
}

export default TodoList;
