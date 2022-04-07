import React, { useCallback, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import getPhotos from "../../store/actions/getPhotos";
import { toggleTheme } from "../../store/actions/toggleTheme";
import { themeSelector } from "../../store/selectors";
import { API_KEY, REDIRECT_URI } from "../../Utils/constants";
import { DOWNLOAD_DATA, THEME, AUTH } from "./store";

const Header = () => {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

  const downloadDataHandler = useCallback(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const toggleThemeHandler = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  const [client_id, redirect_uri, response_type, scope] = [
    API_KEY,
    REDIRECT_URI,
    "code",
    "public+write_likes",
  ];

  const beginAutorisation = () => {
    console.log();
    // const paramsURI = new URLSearchParams(params).toString();
    const authenticationUrl = `https://unsplash.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`;
    console.log("authenticationUrl", authenticationUrl);
    document.location.assign(authenticationUrl);
  };

  return (
    <>
      <button className={`button ${theme}`} onClick={beginAutorisation}>
        {AUTH}
      </button>
      <button className={`button ${theme}`} onClick={toggleThemeHandler}>
        {THEME}
      </button>

      <button className={`button ${theme}`} onClick={downloadDataHandler}>
        {DOWNLOAD_DATA}
      </button>
    </>
  );
};

export default memo(Header);
