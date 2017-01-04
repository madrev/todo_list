import merge from 'lodash/merge';
import { RECEIVE_ERRORS, CLEAR_ERRORS, receiveErrors, clearErrors } from "../actions/error_actions.js";

const errorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default errorReducer;
