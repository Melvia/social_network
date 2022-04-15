import { SET_SCROLL_POSITION_Y } from "../action_types.js";

const scrollPositionYReducer = (state = 0, action) => {
  console.log(action.payload);
  switch (action.type) {
    case SET_SCROLL_POSITION_Y:
      return action.payload;
    default:
      return state;
  }
};

export default scrollPositionYReducer;
