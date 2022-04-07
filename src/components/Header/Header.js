import React, { useCallback, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import getPhotos from "../../store/actions/getPhotos";
import { toggleTheme } from "../../store/actions/toggleTheme";
import { themeSelector } from "../../store/selectors";
import { DOWNLOAD_DATA, THEME } from "./store";
import Login from "../Login/Login";

const Header = () => {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

  const downloadDataHandler = useCallback(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const toggleThemeHandler = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  return (
    <>
      <button className={`button ${theme}`} onClick={toggleThemeHandler}>
        {THEME}
      </button>

      <button className={`button ${theme}`} onClick={downloadDataHandler}>
        {DOWNLOAD_DATA}
      </button>

      <Login />
    </>
  );
};

export default memo(Header);
