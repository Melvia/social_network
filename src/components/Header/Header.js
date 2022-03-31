import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleTheme } from "../../store/actions/toggleTheme";
import getPhotos from "../../store/actions/getPhotos";
import { themeSelector } from "../../store/selectors";

const Header = () => {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

  return (
    <>
      <button
        className={`button ${theme}`}
        onClick={() => {
          dispatch(toggleTheme());
        }}
      >
        Тема
      </button>

      <button
        className={`button ${theme}`}
        onClick={() => {
          dispatch(getPhotos());
        }}
      >
        Загрузить данные
      </button>
    </>
  );
};

export default Header;
