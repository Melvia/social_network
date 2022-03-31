import React, { memo } from "react";
import { useSelector } from "react-redux";

import FeedPhoto from "../FeedPhoto";
import {
  photoSelector,
  themeSelector,
  loadingSelector,
} from "../../store/selectors";

const Feed = () => {
  const photos = useSelector(photoSelector);
  const theme = useSelector(themeSelector);
  const isLoading = useSelector(loadingSelector);

  if (photos.lenght === 0 && isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className={`container ${theme}`}>
          <div className="feed">
            <ul className="columnUl">
              {photos.map((photo, index) => (
                <li key={photo.id} className="li">
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
