import React from "react";
import * as styles from "./Logo.module.scss";
import { animateScroll as scroll } from "react-scroll";
// import { useHistory } from "react-router-dom";


const Logo = () => {
  // const history = useHistory();
  const homeHandle = () => {

    // history.push("/");

  }

  return (
    <small
      className={styles.logo}
      onClick={
        homeHandle
      }
    >
      <span style={{ color: "#fff", cursor: "pointer" }}>
        #EN<span style={{ color: "#bfa67a" }}>ZO</span>
      </span>
    </small>
  );
};

export default Logo;
