import React, { useCallback, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import getPhotos from "../../store/actions/getPhotos";
import { toggleTheme } from "../../store/actions/toggleTheme";
import { themeSelector } from "../../store/selectors";

import { API_KEY, REDIRECT_URI } from "../../Utils/constants";
import { DOWNLOAD_DATA, THEME, AUTH, TITLE } from "./store";

import styles from "./Header.module.scss";

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
    const authenticationUrl = `https://unsplash.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`;
    document.location.assign(authenticationUrl);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__logo}>{TITLE}</div>
        <input
          type="text"
          placeholder="Поиск"
          className={styles.Header__search}
        ></input>
        <div className={styles.header__wrapper}>
          <div className={styles.header__item}>
            <span className="material-icons">home</span>
          </div>
          <div className={styles.header__item} onClick={beginAutorisation}>
            <span className="material-icons">login</span>
          </div>
          <div className={styles.header__item}>
            <span className="material-icons">night</span>
          </div>
          <div className={styles.header__item}>
            <span className="material-icons">favorite</span>
          </div>
          <div className={styles.header__item}>
            <span className="material-icons">account_circle</span>
          </div>
        </div>
        <button className={`button ${theme}`} onClick={beginAutorisation}>
          {AUTH}
        </button>
        <button className={`button ${theme}`} onClick={downloadDataHandler}>
          {DOWNLOAD_DATA}
        </button>
      </div>
    </>
  );
};

/*        <button className={`button ${theme}`} onClick={toggleThemeHandler}>
          {THEME}
        </button>

        <button className={`button ${theme}`} onClick={downloadDataHandler}>
          {DOWNLOAD_DATA}
        </button> 
      */
export default memo(Header);
