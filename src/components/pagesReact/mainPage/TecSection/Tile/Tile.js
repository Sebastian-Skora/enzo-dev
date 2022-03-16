import React from "react";
import * as styles from "./Tile.module.scss";
import { connect } from "react-redux";
const Tile = ({ img, handlePopupOpen, modeRedux }) => {
  return (
    <div
      onClick={handlePopupOpen}
      className={`${styles.tile_container} ${modeRedux && styles.dark_mode}`}
      style={{ backgroundImage: `url(${img})` }}
      onKeyDown={handlePopupOpen}
      role="button"
      tabIndex={0}
    >
      {/* <div className={styles.tile_description}>{children}</div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    modeRedux: state.toggleMode,
  };
};

export default connect(mapStateToProps, null)(Tile);
