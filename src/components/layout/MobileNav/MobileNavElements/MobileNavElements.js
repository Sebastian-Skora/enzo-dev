import React from "react";
import * as styles from "./MobileNavElements.module.scss";
import { Link as NavLink } from "gatsby";
const MobileNavElements = ({ isOpen, toggleNav }) => {
  return (
    <ul
      className={styles.mobileNavElements}
      style={{
        height: isOpen ? "30vh" : "0vh",
      }}
    >
      <li className={styles.navItem} style={{ opacity: isOpen ? "1" : "0", pointerEvents: isOpen ? "all" : "none" }}>
        <NavLink
          exact
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to="/"
          onClick={toggleNav}
          style={{ pointerEvents: isOpen ? "all" : "none" }}
        >
          Strona główna
        </NavLink>
      </li>
      <li className={styles.navItem} style={{ opacity: isOpen ? "1" : "0", pointerEvents: isOpen ? "all" : "none" }}>
        <NavLink
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to="/uslugi"
          onClick={toggleNav}
          style={{ pointerEvents: isOpen ? "all" : "none" }}
        >
          Uslugi
        </NavLink>
      </li>
      <li className={styles.navItem} style={{ opacity: isOpen ? "1" : "0", pointerEvents: isOpen ? "all" : "none" }}>
        <NavLink
          exact
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to="/aktualnosci"
          onClick={toggleNav}
          style={{ pointerEvents: isOpen ? "all" : "none" }}
        >
          Aktualności
        </NavLink>
      </li>
      <li className={styles.navItem} style={{ opacity: isOpen ? "1" : "0", pointerEvents: isOpen ? "all" : "none" }}>
        <NavLink
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to="/kontakt"
          onClick={toggleNav}
          style={{ pointerEvents: isOpen ? "all" : "none" }}
        >
          Kontakt
        </NavLink>
      </li>

    </ul>
  );
};

export default MobileNavElements;
