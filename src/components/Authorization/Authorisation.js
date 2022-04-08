import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { createApi } from "unsplash-js";
import { API_KEY, REDIRECT_URI, SECRET_KEY } from "../../Utils/constants";
import axios from "axios";

//https://unsplash.com/documentation#user-authentication

const Authorisation = () => {
  const code = document.location.search.split(`code=`)[1];
  console.log(code);
  //const code = useParams();

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
        console.log(response.data.access_token);
        //localStorage.setItem("access_token", response.data.access_token);
        let cookie_date = new Date(); // Текущая дата и время
        cookie_date.setTime(cookie_date.getTime() + 1000 * 60 * 24);

        console.log(cookie_date);
        document.cookie = `access_token=${encodeURIComponent(
          response.data.access_token
        )}; expires=${cookie_date.toGMTString()}`;
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
