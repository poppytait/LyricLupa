import { combineReducers } from "redux";
import trackReducer from "./trackReducer";
import artistReducer from "./artistReducer";
import searchCategoryReducer from "../reducers/searchCategory/index";

const rootReducer = combineReducers({
  tracks: trackReducer,
  artists: artistReducer,
  searchCategory: searchCategoryReducer
});

export default rootReducer;
