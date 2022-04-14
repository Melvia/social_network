import { createApi } from "unsplash-js";
import {
  ADD_PHOTOS_SUCCESS,
  ADD_PHOTOS_LOADING,
  COUNT_LAST_PHOTO,
} from "../actionTypes.js";
import { API_KEY, PHOTO_STEPS } from "../../Utils/constants.js";

import { SET_ERROR } from "../actionTypes.js";

const api = createApi({
  accessKey: API_KEY,
});

const getPhotos = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_PHOTOS_LOADING, payload: true });
    const photosLenght = getState().lastPhoto;
    const resolve = await api.photos.list({
      page: photosLenght,
      perPage: PHOTO_STEPS,
    });
    await dispatch({ type: ADD_PHOTOS_LOADING, payload: false });
    await dispatch({
      type: COUNT_LAST_PHOTO,
      payload: photosLenght + PHOTO_STEPS,
    });
    await dispatch({
      type: ADD_PHOTOS_SUCCESS,
      payload: resolve.response.results,
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error.toString(),
    });
  }
};

export default getPhotos;
