// import all our actions from our types.js file
import {  SET_CURRENT_USER, USER_LOADING } from "../actions/types";

const isEmpty = require("is-empty");

// define the initial state
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};

export default function(state = initialState, action) {
  // Define how the state should change based on actions using a switch statement
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
