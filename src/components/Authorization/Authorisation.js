import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { createApi } from "unsplash-js";
import { API_KEY, REDIRECT_URI, SECRET_KEY } from "../../Utils/constants";
import axios from "axios";

//https://unsplash.com/documentation#user-authentication

const Authorisation = () => {
  //const code = useParams();
  useEffect(() => {
    //const code = document.location.search.split(`code=`)[1];
    const code = "GgJCaps88OC7Vm8gAZi9qLyOiGsFg5XrV5OPqWltrCc";
    console.log("code", code);
    axios
      .post("https://unsplash.com/oauth/token", {
        client_id: API_KEY,
        client_secret: SECRET_KEY,
        redirect_uri: REDIRECT_URI,
        code: code,
        grand_type: "authorization_code",
      })
      .then((res) => res.json())
      .then()
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <button>Вы молодец!</button>
    </div>
  );
};

export default Authorisation;
