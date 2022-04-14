import React from "react";
import styles from "./Preloader.module.scss";

const Preloader = () => (
  <div className={styles.loader__wrapper}>
    <div className={styles.loader}>
      <div className={styles.face}>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.face}>
        <div className={styles.circle}></div>
      </div>
    </div>
  </div>
);
export default Preloader;
