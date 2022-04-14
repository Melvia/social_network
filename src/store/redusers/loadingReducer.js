import { ADD_PHOTOS_LOADING } from "../actionTypes.js";
const initial = false;

const loadingReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_PHOTOS_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export default loadingReducer;
