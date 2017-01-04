import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import {getTodos} from './util/todo_api_util.js';
import { fetchTodos } from './actions/todo_actions.js';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.getTodos = getTodos;
  window.fetchTodos = fetchTodos;
  window.store = store;
  ReactDOM.render(<Root store={store}/>, document.getElementById('content'));
});
