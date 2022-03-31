import { createApi } from "unsplash-js";
import { ADD_CURRENT_PHOTO_SUCCESS } from "../action_types";

import { API_KEY } from "../../Utils/constants";

const api = createApi({
  accessKey: API_KEY,
});

const getCurrentPhoto = (id) => (dispatch) => {
  api.photos
    .get({ photoId: id })
    .then((resolve) => {
      dispatch({ type: ADD_CURRENT_PHOTO_SUCCESS, payload: resolve.response });
    })
    .catch((err) => {
      console.log("something went wrong!");
    });
};

export default getCurrentPhoto;
