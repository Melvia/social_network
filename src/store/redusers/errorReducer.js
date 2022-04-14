import { SET_ERROR, CLEAR_ERROR } from "../actionTypes";

const errorReducer = (state = "", action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    case CLEAR_ERROR:
      return "";
    default:
      return state;
  }
};

export default errorReducer;
