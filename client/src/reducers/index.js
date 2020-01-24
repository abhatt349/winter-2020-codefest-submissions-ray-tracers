// import all neccessary dependencies
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

/* use combinedReducers from redux to combine our authReducer and errorReducer
into one rootReducer */
export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});
