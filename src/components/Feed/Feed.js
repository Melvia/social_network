import React from "react";
import { useSelector } from "react-redux";

import FeedPhoto from "../FeedPhoto/FeedPhoto";
import {
  photoSelector,
  themeSelector,
  lastPhotoNumberSelector,
} from "../../store/selectors";

const Feed = () => {
  const photos = useSelector(photoSelector);
  const theme = useSelector(themeSelector);
  const lastPhoto = useSelector(lastPhotoNumberSelector);

  if (photos.lenght === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className={`container ${theme}`}>
          <div className="feed">
            <ul className="columnUl">
              {photos.map((photo, index) => (
                <li key={`${photo.id}-${index + lastPhoto}`} className="li">
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

export default Feed;
