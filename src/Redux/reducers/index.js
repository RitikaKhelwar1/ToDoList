import Auth from "./auth";

import { combineReducers } from "redux";
import AddTask from "./addTask";

const rootReducer = combineReducers(
    {
    Auth,
    AddTask
    }
);

export default rootReducer;
