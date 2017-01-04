import {connect} from 'react-redux';
import TodoList from './todo_list.jsx';
import React from 'react';
import {allTodos} from '../../reducers/selectors.js';
import {createTodo, removeTodo, fetchTodos, updateTodo, deleteTodo} from '../../actions/todo_actions.js';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  fetchTodos: (todos) => dispatch(fetchTodos(todos)),
  updateTodo: (todos) => dispatch(updateTodo(todos))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
