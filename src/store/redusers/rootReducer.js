import { combineReducers } from "redux";
import photoReducer from "./photoReducer";
import themeReducer from "./themeReducer";
import lastPhotoReducer from "./ lastPhotoReducer";
import currentPhotoReducer from "./currentPhotoReducer";
import loadingReducer from "./loadingReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  isLightTheme: themeReducer,
  photos: photoReducer,
  lastPhoto: lastPhotoReducer,
  currentPhoto: currentPhotoReducer,
  isLoading: loadingReducer,
  error: errorReducer,
});

export default rootReducer;
