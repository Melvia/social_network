import React, { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import { ADD_COMMENT, PUBLISH, NOTES } from "./store";
import { PATH_UNSPLASH } from "../../Utils/paths";

const Card = ({
  photo: {
    user,
    urls,
    id,
    likes,
    liked_by_user,
    user: {
      profile_image: { small },
    },
  },
}) => (
  <div className={styles.card}>
    <div className={styles.card__header}>
      <img className={styles.card__userLogo} src={small} />
      <div className={styles.card__userDate}>
        <a
          className={styles.card__userName}
          target="_blank"
          href={`${PATH_UNSPLASH}/@${user.username}`}
        >
          {user.username}
        </a>

        <div className={styles.card__userPosition}>{user.location}</div>
      </div>

      <div className={styles.card__burger}>...</div>
    </div>
    <div className={styles.card__content}>
      <Link to={`/photo/${id}`}>
        <img
          name={id}
          id={id}
          className={styles.card__picture}
          src={urls.regular}
          alt={urls.regular}
        ></img>
      </Link>
    </div>

    <div className={styles.card__notes}>
      {likes} {NOTES}
    </div>
    <div className={styles.card__footer}>
      <input
        type="text"
        placeholder={ADD_COMMENT}
        className={styles.card__inputComment}
      />
      <div className={styles.card__button}>{PUBLISH}</div>
    </div>
  </div>
);

export default memo(Card);
