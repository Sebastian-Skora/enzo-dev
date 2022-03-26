import React from "react";
import * as styles from "./Burger.module.scss";
const Burger = ({ toggleNav, isOpen }) => {
  return (
    <div
      id="burger-button"
      onClick={toggleNav}
      onKeyDown={toggleNav}
      className={styles.mobileNav_wrapper}
      role="button"
      tabIndex={0}
    >
      <span
        className={isOpen ? `${styles.burger} ${styles.open}` : styles.burger}
      ></span>
    </div>
  );
};

export default Burger;
