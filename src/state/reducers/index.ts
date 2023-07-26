import { combineReducers } from "redux";
import photoReducer from "./photoReducer";
import imageDetailReducer from "./imageDetailReducer";

let rootReducer = combineReducers({
  // TODO reducers go here
  photo: photoReducer,
  detail: imageDetailReducer,
});

export default rootReducer;
