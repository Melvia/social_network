import {
  ADD_CURRENT_PHOTO_SUCCESS,
  CLEAR_CURRENT_PHOTO,
} from "../actionTypes.js";

const currentPhotoReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CURRENT_PHOTO_SUCCESS:
      return action.payload;
    case CLEAR_CURRENT_PHOTO:
      return null;
    default:
      return state;
  }
};

export default currentPhotoReducer;
