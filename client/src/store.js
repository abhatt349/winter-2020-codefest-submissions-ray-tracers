//importing dependencies
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

//creating a Redux store that holds the complete status tree of the app
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),           //applying all the middleware we have coded beforehand
    window.__REDUX_DEVTOOLS_EXTENSION__ &&    //used for debugging
window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
