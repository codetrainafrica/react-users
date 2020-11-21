import { createStore, combineReducers } from "redux";
import usersReducer from "../reducers/usersReducer";
import authReducer from "../reducers/authReducer";

export const store = createStore(
  combineReducers({
    users: usersReducer,
    auth: authReducer,
  })
);
