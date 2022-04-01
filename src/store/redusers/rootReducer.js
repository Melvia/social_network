import { combineReducers } from "redux";
import photoReducer from "./photoReducer";
import themeReducer from "./themeReducer";
import lastPhotoReducer from "./ lastPhotoReducer";
import currentPhotoReducer from "./currentPhotoReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  isLightTheme: themeReducer,
  photos: photoReducer,
  lastPhoto: lastPhotoReducer,
  currentPhoto: currentPhotoReducer,
  isLoading: loadingReducer,
});

export default rootReducer;
