import React, { useEffect, memo } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import getCurrentPhoto from "../../store/actions/getCurrentPhoto";
import {
  currentPhotoSelector,
  themeSelector,
  loadingSelector,
} from "../../store/selectors";

const Photo = () => {
  const currentPhoto = useSelector(currentPhotoSelector);
  const isLightTheme = useSelector(themeSelector);
  const isLoading = useSelector(loadingSelector);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCurrentPhoto(id));
  }, [id, dispatch]);

  return !currentPhoto ? (
    <div>Загрузка данных...</div>
  ) : (
    <>
      <Link to={`/`} className={isLightTheme}>
        <img className="img-full" src={currentPhoto.urls.full}></img>
      </Link>
      <a
        className="credit"
        target="_blank"
        href={`https://unsplash.com/@${currentPhoto.user.username}`}
      >
        {currentPhoto.user.name}
      </a>
    </>
  );
};

export default memo(Photo);
