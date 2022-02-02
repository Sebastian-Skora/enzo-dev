import React from "react";
import * as styles from "./Burger.module.scss";
const Burger = ({ toggleNav, isOpen }) => {
  return (
    <div onClick={toggleNav} className={styles.mobileNav_wrapper}>
      <span
        className={isOpen ? `${styles.burger} ${styles.open}` : styles.burger}
      ></span>
    </div>
  );
};

export default Burger;
