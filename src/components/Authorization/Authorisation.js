import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { API_KEY, REDIRECT_URI, SECRET_KEY } from "../../Utils/constants";

import axios from "axios";
import { PATH_PHOTO, PATH_COMMON } from "./../../Utils/paths";

//https://unsplash.com/documentation#user-authentication

const Authorisation = () => {
  const code = document.location.search.split(`code=`)[1];

  useEffect(() => {
    axios
      .post("https://unsplash.com/oauth/token", {
        client_id: API_KEY,
        client_secret: SECRET_KEY,
        redirect_uri: REDIRECT_URI,
        code: code,
        grant_type: "authorization_code",
      })
      .then((response) => {
        localStorage.setItem("token", response.data.access_token);
        document.location.assign("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [code]);

  return (
    <div>
      <button>Вы молодец!</button>
    </div>
  );
};

export default Authorisation;
