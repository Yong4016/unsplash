import { combineReducers } from "redux";
import photoReducer from "./photoReducer";

let rootReducer = combineReducers({
    // TODO reducers go here
    photo: photoReducer
})

export default rootReducer;

