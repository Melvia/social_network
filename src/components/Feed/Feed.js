import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_CURRENT_PHOTO } from "../../store/action_types";

import FeedPhoto from "../FeedPhoto/FeedPhoto";
import {
  photoSelector,
  themeSelector,
  loadingSelector,
} from "../../store/selectors";

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
