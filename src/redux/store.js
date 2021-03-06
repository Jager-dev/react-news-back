import {combineReducers, createStore} from "redux";
import {userReducer} from "./reducers/userReducer";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";

export const store = createStore(combineReducers({
  user: userReducer
}),composeWithDevTools())