import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { PATH_PHOTO, PATH_COMMON } from "../../Utils/paths";
import { ADD_CURRENT_PHOTO_SUCCESS } from "../action_types";

const setLike = (id) => (dispatch) => {
  const token = localStorage.getItem("token");

  axios
    .post(
      `https://api.unsplash.com/photos/${id}/like`,
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
    .catch(function (error) {
      console.log(error);
    });
};

export default setLike;
