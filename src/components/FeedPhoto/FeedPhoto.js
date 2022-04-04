import React, { memo } from "react";
import { Link } from "react-router-dom";
import { SET_SCROLL_POSITION_Y } from "../../store/action_types";
import { useDispatch } from "react-redux";

const FeedPhoto = ({ photo: { user, urls, id } }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (window.scrollY > 0) {
      dispatch({ type: SET_SCROLL_POSITION_Y, payload: window.scrollY });
    }
  };

  return (
    <>
      <Link to={`/photo/${id}`}>
        <img
          name={id}
          id={id}
          className="img"
          src={urls.regular}
          alt={urls.regular}
          onClick={handleClick}
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

export default memo(FeedPhoto);
