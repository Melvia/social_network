import React from "react";
import { createApi } from "unsplash-js";
import { API_KEY, SECRET } from "../../Utils/constants";

//https://unsplash.com/documentation#user-authentication

const Login = () => {
  const api = createApi({
    accessKey: API_KEY,
  });

  const onClickHandler = () => {
    const authenticationUrl = api.auth.getAuthenticationUrl([
      "public",
      "write_likes",
    ]);

    window.location.assign(authenticationUrl);
  };

  return (
    <div>
      <button onClick={onClickHandler}>Авторизоваться</button>
    </div>
  );
};

export default Login;
