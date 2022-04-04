import React, { memo, useEffect, useCallback } from "react";
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

const Feed = () => {
  const photos = useSelector(photoSelector);
  const theme = useSelector(themeSelector);
  const isLoading = useSelector(loadingSelector);
  const scrollPositionY = useSelector(scrollPozitionYSelector);
  const dispatch = useDispatch();

  const downloadDataHandler = useCallback(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      dispatch({ type: SET_SCROLL_POSITION_Y, payload: window.scrollY });
    }
  };

  //transition to current component
  useEffect(() => {
    dispatch({ type: CLEAR_CURRENT_PHOTO });
    window.addEventListener("scroll", handleScroll);
    window.scrollTo(0, scrollPositionY);
    return () => {
      console.log("conponent is killed", scrollPositionY);
    };
  }, []);

  //bottom of page handle
  useEffect(() => {
    if (
      window.innerHeight + window.scrollY >
      document.body.clientHeight - 100
    ) {
      downloadDataHandler();
    }
  }, [scrollPositionY]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
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
  }
};

export default memo(Feed);
