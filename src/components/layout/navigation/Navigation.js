import React from "react";
// import { NavLink } from "react-router-dom";
import { Link as NavLink } from "gatsby"
import * as styles from "./Navigation.module.scss";

const Navigation = () => (
  <ul className={styles.navList}>
    <li className={styles.navItem}>
      <NavLink
        exact
        activeClassName={styles.itemLinkActive}
        className={styles.itemLink}
        to="/"
      >
        Strona główna
      </NavLink>
    </li>
    <li className={styles.navItem}>
      <NavLink
        activeClassName={styles.itemLinkActive}
        className={styles.itemLink}
        to="/uslugi"
      >
        Usługi
      </NavLink>
    </li>

    <li className={styles.navItem}>
      <NavLink
        exact
        activeClassName={styles.itemLinkActive}
        className={styles.itemLink}
        to="/aktualnosci"
      >
        Aktualności
      </NavLink>
    </li>
    <li className={styles.navItem}>
      <NavLink
        activeClassName={styles.itemLinkActive}
        className={styles.itemLink}
        to="/kontakt"
      >
        Kontakt
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
