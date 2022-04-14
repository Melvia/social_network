import React from "react";
import styles from "./Error.module.scss";
import { ERROR_MESSAGE } from "./store";
import { CLEAR_ERROR } from "../../store/actionTypes";
import { useDispatch } from "react-redux";

const Error = ({ text }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={styles.error}
      onClick={() => {
        dispatch({
          type: CLEAR_ERROR,
        });
      }}
    >
      <div className={styles.error__header}>
        <div className={styles.error__title}>
          <span className="material-icons">error</span>
          <span>{ERROR_MESSAGE}</span>
          <div className={styles.error__cross}>x</div>
        </div>
      </div>

      <div className={styles.error__content}>
        <span> {text.toString()}</span>
      </div>
    </div>
  );
};

export default Error;
