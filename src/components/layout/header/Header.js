import React, { useState } from "react";
import * as styles from "../header/Header.module.scss";
import Navigation from "../navigation/Navigation.js";
import Logo from "../Logo/Logo";
import MobileNav from "../MobileNav/MobileNav";
import DarkModeToggle from "react-dark-mode-toggle";
import { connect } from "react-redux";
import * as gameActions from "../../redux/actions/index";
const Header = (props) => {
  return (
    <header className={styles.header}>

      <Logo />


      <Navigation />
      <MobileNav />
      <div className={styles.modeChanger}>

        <DarkModeToggle
          onChange={props.toggleModeRedux}
          checked={props.modeRedux}
          size={60}
        />

      </div>
    </header>
  )
};

const mapStateToProps = state => {
  return {
    modeRedux: state.toggleMode,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModeRedux: () =>
      dispatch(gameActions.onToggleMode()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
