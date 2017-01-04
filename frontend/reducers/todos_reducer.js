import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from '../actions/todo_actions.js';
import merge from 'lodash/merge';

// const initialState = {
//   1: {
//     id: 1,
//     title: "wash car",
//     body: "with soap",
//     done: false
//   },
//   2: {
//     id: 2,
//     title: "wash dog",
//     body: "with shampoo",
//     done: true
//   },
// };


const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODO:
      let newObj = {};
      newObj[action.todo.id] = action.todo;
      return merge({}, state, newObj);
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach( todo => {newState[todo.id] = todo;});
      return newState;
    case REMOVE_TODO:
      let newState2 = {};
      Object.keys(state).forEach( (id) => {
        if(parseInt(id) !== action.todo.id) {
          newState2[id] = state[id];
        }
      });
      return newState2;
    default:
      return state;
  }
};

export default todosReducer;
