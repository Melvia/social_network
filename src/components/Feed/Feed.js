import React, { memo, useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CLEAR_CURRENT_PHOTO,
  SET_SCROLL_POSITION_Y,
} from "../../store/action_types";
import getPhotos from "../../store/actions/getPhotos";

import FeedPhoto from "../FeedPhoto/FeedPhoto";
import {
  photoSelector,
  themeSelector,
  loadingSelector,
  scrollPozitionYSelector,
} from "../../store/selectors";
import { PADDING_BOTTOM } from "../../Utils/constants";

const Feed = () => {
  const photos = useSelector(photoSelector);
  const theme = useSelector(themeSelector);
  const isLoading = useSelector(loadingSelector);
  const scrollPositionY = useSelector(scrollPozitionYSelector);
  const dispatch = useDispatch();

  const downloadDataHandler = useCallback(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const isEndOfPage =
    window.innerHeight + window.scrollY >
    document.body.clientHeight - PADDING_BOTTOM;
  const handleScroll = () => isEndOfPage && downloadDataHandler();

  //visible new component
  useEffect(() => {
    if (photos.length === 0) {
      downloadDataHandler();
    }
  }, []);

  //transition to current component
  useEffect(() => {
    dispatch({ type: CLEAR_CURRENT_PHOTO });
    window.addEventListener("scroll", handleScroll);
    window.scrollTo(0, scrollPositionY);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`container ${theme}`}>
        <div className="feed">
          <ul className="columnUl">
            {photos.map((photo, index) => (
              <li key={index} className="li">
                <FeedPhoto photo={photo} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default memo(Feed);
