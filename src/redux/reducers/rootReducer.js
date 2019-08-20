import { combineReducers } from "redux";
import trackReducer from "./trackReducer";
import artistReducer from './artistReducer'

const rootReducer = combineReducers({
  tracks: trackReducer,
  artists: artistReducer
});

export default rootReducer;
