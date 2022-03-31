import React from "react";
import { ADD_PHOTOS_SUCCESS } from "../action_types.js";

const photoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PHOTOS_SUCCESS:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default photoReducer;
