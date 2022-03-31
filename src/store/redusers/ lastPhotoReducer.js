import React from "react";
import { COUNT_LAST_PHOTO } from "../action_types.js";

const lastPhotoReducer = (state = 0, action) => {
  switch (action.type) {
    case COUNT_LAST_PHOTO:
      return action.payload;
    default:
      return state;
  }
};

export default lastPhotoReducer;
