import React from "react";
import * as styles from "./PopUp.module.scss";
const PopUp = ({ message, show }) => {
  return (
    <div className={show ? `${styles.popUp} ${styles.open}` : styles.popUp}>
      {message === "OK" ? <p>Wysłano wiadomośc!</p> : <p>{`${message}`}</p>}
    </div>
  );
};

export default PopUp;
