import React from 'react'
import * as styles from './SubpageHeader.module.scss';
import { connect } from 'react-redux';
const SubpageHeader = ({ children, modeRedux }) => {
  return (
    <div className={`${styles.title_section} ${modeRedux && styles.dark_mode}`}>
      <span className={`${styles.page_title} ${modeRedux && styles.dark_mode}`}>{children}</span>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    modeRedux: state.toggleMode,
  };
};

export default connect(mapStateToProps, null)(SubpageHeader);