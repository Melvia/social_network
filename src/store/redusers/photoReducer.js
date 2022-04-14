import { ADD_PHOTOS_SUCCESS } from "../actionTypes.js";

const photoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PHOTOS_SUCCESS:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default photoReducer;
