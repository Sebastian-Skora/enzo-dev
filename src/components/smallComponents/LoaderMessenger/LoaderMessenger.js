import React from "react";
import * as styles from "./LoaderMessenger.module.scss";
const LoaderMessenger = () => {
  return (
    <>
      <div className={styles.lds_ellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default LoaderMessenger;
