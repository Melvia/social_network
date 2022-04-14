import { createApi } from "unsplash-js";
import { ADD_CURRENT_PHOTO_SUCCESS, ADD_PHOTOS_LOADING } from "../actionTypes";

import { API_KEY } from "../../Utils/constants";
import { SET_ERROR } from "../actionTypes";

const api = createApi({
  accessKey: API_KEY,
});

const getCurrentPhoto = (id) => (dispatch) => {
  dispatch({ type: ADD_PHOTOS_LOADING, payload: true });
  api.photos
    .get({ photoId: id })
    .then((resolve) => {
      dispatch({ type: ADD_CURRENT_PHOTO_SUCCESS, payload: resolve.response });
    })
    .catch((error) => {
      dispatch({
        type: SET_ERROR,
        payload: error.toString(),
      });
    });
  dispatch({ type: ADD_PHOTOS_LOADING, payload: false });
};

export default getCurrentPhoto;
