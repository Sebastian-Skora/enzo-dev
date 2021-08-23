import React from "react";
// import { NavLink } from "react-router-dom";
import { Link as NavLink } from "gatsby"
import * as styles from "./Navigation.module.scss";
import * as actions from "../../redux/actions/index";
import { connect } from 'react-redux'
const Navigation = ({ toggleModal }) => (
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
        exact
        activeClassName={styles.itemLinkActive}
        className={styles.itemLink}
        to="/uslugi/"
      >
        Usługi
      </NavLink>
    </li>

    <li className={styles.navItem}>
      <NavLink
        exact
        activeClassName={styles.itemLinkActive}
        className={styles.itemLink}
        to="/blog/"
      >
        Blog
      </NavLink>
    </li>
    <li className={styles.navItem}>
      <NavLink
        activeClassName={styles.itemLinkActive}
        className={styles.itemLink}
        to="/kontakt/"
      >
        Kontakt
      </NavLink>
    </li>
    <li className={styles.navItem} style={{ marginLeft: "5px" }}>
      <button className={styles.quotation} onClick={toggleModal}>
        <span></span>Darmowa wycena <i class="fas fa-long-arrow-alt-right"></i>
      </button>
    </li>
  </ul>
);


const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () =>
      dispatch(actions.onQuotationModal()),
  }
}


export default connect(null, mapDispatchToProps)(Navigation);
