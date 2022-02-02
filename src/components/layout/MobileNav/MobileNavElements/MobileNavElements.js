import React from "react";
import * as styles from "./MobileNavElements.module.scss";
import { Link as NavLink } from "gatsby";
import * as actions from "../../../redux/actions/index";
import { connect } from "react-redux";
const MobileNavElements = ({ isOpen, toggleNav, toggleModal }) => {
  return (
    <ul
      className={styles.mobileNavElements}
      style={{
        height: isOpen ? "40vh" : "0vh",
      }}
    >
      <li
        className={styles.navItem}
        style={{
          opacity: isOpen ? "1" : "0",
          pointerEvents: isOpen ? "all" : "none",
        }}
      >
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
      <li
        className={styles.navItem}
        style={{
          opacity: isOpen ? "1" : "0",
          pointerEvents: isOpen ? "all" : "none",
        }}
      >
        <NavLink
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to="/uslugi/"
          onClick={toggleNav}
          style={{ pointerEvents: isOpen ? "all" : "none" }}
        >
          Uslugi
        </NavLink>
      </li>
      <li
        className={styles.navItem}
        style={{
          opacity: isOpen ? "1" : "0",
          pointerEvents: isOpen ? "all" : "none",
        }}
      >
        <NavLink
          exact
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to="/blog/"
          onClick={toggleNav}
          style={{ pointerEvents: isOpen ? "all" : "none" }}
        >
          Blog
        </NavLink>
      </li>
      <li
        className={styles.navItem}
        style={{
          opacity: isOpen ? "1" : "0",
          pointerEvents: isOpen ? "all" : "none",
        }}
      >
        <NavLink
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to="/kontakt/"
          onClick={toggleNav}
          style={{ pointerEvents: isOpen ? "all" : "none" }}
        >
          Kontakt
        </NavLink>
      </li>
      {/* <li className={styles.navItem} style={{ opacity: isOpen ? "1" : "0", pointerEvents: isOpen ? "all" : "none" }}>
        <button className={styles.quotation} onClick={toggleModal}>
          <span></span>Darmowa wycena <i class="fas fa-long-arrow-alt-right"></i>
        </button>
      </li> */}
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch(actions.onQuotationModal()),
  };
};

export default connect(null, mapDispatchToProps)(MobileNavElements);
