import { TOGGLE_THEME } from "../actionTypes.js";
const initial = true;

const themeReducer = (state = initial, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return !state;
    default:
      return state;
  }
};

export default themeReducer;
