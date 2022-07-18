import { combineReducers } from "@reduxjs/toolkit";
import operating from "./addReducer";
import users from "./getUsers";
const rootReducer = combineReducers({ str: operating, getUsers: users });
export default rootReducer;
