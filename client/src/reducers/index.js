import { combineReducers } from "redux";

import forms from "./posts";
import auth from "./auth";

export default combineReducers({
   forms, auth
});