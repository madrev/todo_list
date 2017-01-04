import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer.js';
import thunk from '../middleware/thunk.js';


const _defaultState = {
  todos: {},
  errors: []
};

const configureStore = () => (
  createStore(rootReducer, _defaultState, applyMiddleware(thunk))
);


export default configureStore;
