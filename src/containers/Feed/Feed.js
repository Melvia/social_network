import React, { memo, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CLEAR_CURRENT_PHOTO,
  SET_SCROLL_POSITION_Y,
} from "../../store/actionTypes";
import getPhotos from "../../store/actions/getPhotos";
import { PADDING_BOTTOM } from "../../Utils/constants";

import {
  photoSelector,
  themeSelector,
  loadingSelector,
  errorSelector,
  scrollPozitionYSelector,
  currentPhotoSelector,
} from "../../store/selectors";

import Error from "../../components/Error/Error";
import Card from "./../../components/Card/Card";
import Preloader from "../../components/Preloader/Preloader";

import styles from "./Feed.module.scss";

const Feed = () => {
  const photos = useSelector(photoSelector);
  const currentPhoto = useSelector(currentPhotoSelector);
  const theme = useSelector(themeSelector);
  const isLoading = useSelector(loadingSelector);
  const isError = useSelector(errorSelector);
  const scrollPositionY = useSelector(scrollPozitionYSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: CLEAR_CURRENT_PHOTO });
  }, []);

  const downloadDataHandler = useCallback(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const handleScroll = () => {
    const isEndOfPage =
      window.innerHeight + window.scrollY >
      document.body.clientHeight - PADDING_BOTTOM;
    if (isEndOfPage) downloadDataHandler();
  };

  useEffect(() => {
    window.scrollTo(0, scrollPositionY);
  }, []);

  //transition to current component
  useEffect(() => {
    dispatch({ type: CLEAR_CURRENT_PHOTO });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) {
    return <Preloader />;
  } else {
    return (
      <div className={styles.feed}>
        <ul>
          {photos.map((photo, index) => (
            <li key={index}>
              <Card photo={photo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default memo(Feed);
