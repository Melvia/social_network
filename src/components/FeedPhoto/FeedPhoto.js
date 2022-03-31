import React from "react";
import { Link } from "react-router-dom";

const FeedPhoto = ({ photo }) => {
  const { user, urls } = photo;
  return (
    <>
      <Link to={`/photo/${photo.id}`}>
        <img
          key={photo.id}
          name={photo.id}
          id={photo.id}
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
};

export default FeedPhoto;
