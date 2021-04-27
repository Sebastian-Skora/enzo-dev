import React from 'react'
import * as styles from './SubpageHeader.module.scss';
import { connect } from 'react-redux';
const SubpageHeader = ({ children, modeRedux }) => {
  return (
    <article className={`${styles.title_section} ${modeRedux && styles.dark_mode}`}>
      <h1 className={`${styles.page_title} ${modeRedux && styles.dark_mode}`}>{children}</h1>
    </article>
  )
}


const mapStateToProps = state => {
  return {
    modeRedux: state.toggleMode,
  };
};

export default connect(mapStateToProps, null)(SubpageHeader);