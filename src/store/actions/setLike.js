import axios from "axios";
import { ADD_CURRENT_PHOTO_SUCCESS, SET_ERROR } from "../actionTypes";
import { PATH_UNSPLASH_API } from "../../Utils/paths";

const setLike = (id) => (dispatch) => {
  const token = localStorage.getItem("token");

  axios
    .post(
      `${PATH_UNSPLASH_API}/photos/${id}/like`,
      { params: { id: id } },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((response) => {
      dispatch({
        type: ADD_CURRENT_PHOTO_SUCCESS,
        payload: response.data.photo,
      });
    })
    .catch((error) => {
      dispatch({
        type: SET_ERROR,
        payload: error.toString(),
      });
    });
};

export default setLike;
