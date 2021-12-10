import { createStore, applyMiddleware } from "redux";
import loginReducer from "./reducers/loginreducer";
import signupreducer from "./reducers/signupreducer";
import uiddata from "./reducers/uiddata";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const reducer = combineReducers({
  loginReducer,
  signupreducer,
  uiddata
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
