import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_CURRENT_PHOTO } from "../../store/action_types";
import Slider from "./../Slider/Slider";

import {
  photoSelector,
  themeSelector,
  loadingSelector,
} from "../../store/selectors";

import Card from "./../Card/Card";

import styles from "./Feed.module.scss";

const Feed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: CLEAR_CURRENT_PHOTO });
  }, []);

  const photos = useSelector(photoSelector);
  const theme = useSelector(themeSelector);
  const isLoading = useSelector(loadingSelector);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      //{`container ${theme}`}>
      <div className={styles.feed}>
        <ul className="columnUl">
          {photos.map((photo, index) => (
            <li key={index} className="li">
              <Card photo={photo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default memo(Feed);
