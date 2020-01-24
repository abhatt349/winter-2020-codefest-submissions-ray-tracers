// Import neccessary dependencies
import { GET_ERRORS } from "../actions/types";

const initialState = {};    //empty initialState

// Define how the state should change based on actions using a switch statement
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
