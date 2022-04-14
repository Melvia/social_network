import React, { useEffect, memo } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NOTES, PUBLISH, ADD_COMMENT } from "../Card/store";
import { PATH_UNSPLASH } from "../../Utils/paths";

import getCurrentPhoto from "../../store/actions/getCurrentPhoto";
import {
  currentPhotoSelector,
  themeSelector,
  loadingSelector,
  errorSelector,
} from "../../store/selectors";
import setLike from "../../store/actions/setLike";
import deleteLike from "../../store/actions/deleteLike";
import Preloader from "../Preloader/Preloader";

import styles from "./Photo.module.scss";

const Photo = () => {
  const textError = useSelector(errorSelector);
  const currentPhoto = useSelector(currentPhotoSelector);
  const isLightTheme = useSelector(themeSelector);
  const isLoading = useSelector(loadingSelector);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCurrentPhoto(id));
  }, [id, dispatch]);

  const toggleLike = () => {
    currentPhoto?.liked_by_user
      ? dispatch(deleteLike(id))
      : dispatch(setLike(id));
  };

  return !currentPhoto ? (
    <Preloader />
  ) : (
    <div className={styles.photo__wrapper}>
      <div className={styles.photo}>
        <div className={styles.photo__header}>
          <img
            className={styles.photo__userLogo}
            src={currentPhoto.user.profile_image.small}
          />
          <div className={styles.photo__userDate}>
            <a
              className={styles.photo__userName}
              target="_blank"
              href={`${PATH_UNSPLASH}/@${currentPhoto.user.username}`}
            >
              {currentPhoto.user.username}
            </a>

            <div className={styles.photo__userPosition}>
              {currentPhoto.user.location}
            </div>
          </div>
          <div className={styles.photo__burger}>...</div>
        </div>
        <div className={styles.photo__content}>
          <Link to={`/`}>
            <img
              name={id}
              id={id}
              className={styles.photo__picture}
              src={currentPhoto.urls.full}
            ></img>
          </Link>
        </div>
        <div className={styles.photo__communication}>
          <span className="material-icons">send</span>

          <span className="material-icons" onClick={toggleLike}>
            {currentPhoto.liked_by_user ? "favorite" : "favorite_border"}
          </span>
        </div>
        <div className={styles.photo__notes}>
          {currentPhoto.likes} {NOTES}
        </div>
        <div className={styles.photo__footer}>
          <input
            type="text"
            placeholder={ADD_COMMENT}
            className={styles.photo__inputComment}
          />
          <div className={styles.photo__button}>{PUBLISH}</div>
        </div>
      </div>
    </div>
  );
};

export default memo(Photo);
