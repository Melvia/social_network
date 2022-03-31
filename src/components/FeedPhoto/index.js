import React, { memo } from "react";
import { Link } from "react-router-dom";

const FeedPhoto = ({ photo: { user, urls, id } }) => (
  <>
    <Link to={`/photo/${id}`}>
      <img
        name={id}
        id={id}
        className="img"
        src={urls.regular}
        alt={urls.regular}
      ></img>
    </Link>

    <a
      className="credit"
      target="_blank"
      href={`https://unsplash.com/@${user.username}`}
    >
      {user.name}
    </a>
  </>
);

export default memo(FeedPhoto);
