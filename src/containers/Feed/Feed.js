import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_CURRENT_PHOTO } from "../../store/actionTypes";

import {
  photoSelector,
  themeSelector,
  loadingSelector,
  errorSelector,
} from "../../store/selectors";

import Error from "../../components/Error/Error";
import Card from "./../../components/Card/Card";
import Preloader from "../../components/Preloader/Preloader";

import styles from "./Feed.module.scss";

const Feed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: CLEAR_CURRENT_PHOTO });
  }, []);

  const photos = useSelector(photoSelector);
  const theme = useSelector(themeSelector);
  const isLoading = useSelector(loadingSelector);
  const isError = useSelector(errorSelector);

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
