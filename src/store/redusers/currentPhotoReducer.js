import { ADD_CURRENT_PHOTO_SUCCESS } from "../action_types.js";

const currentPhotoReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CURRENT_PHOTO_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default currentPhotoReducer;
