import React, { Component } from "react";
import SubpageHeader from "../../smallComponents/SubpageHeader/SubpageHeader";
import * as styles from "./Contact.module.scss";
import FormSection from "./Form/FormSection";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { modeRedux } = this.props;
    return (
      <section
        className={`${styles.contact_container} ${
          modeRedux && styles.dark_mode
        }`}
      >
        <SubpageHeader>
          <h1 style={{ fontSize: "26px" }}>Kontakt</h1>
        </SubpageHeader>
        <Fade>
          <FormSection modeRedux={modeRedux} />
        </Fade>
        <section className={styles.map_container}>
          <iframe
            title="myfFrame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.2350709929033!2d17.047930234618033!3d51.1041229142284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc3106276767b%3A0x3ac690294b0b8f45!2seSwipe!5e0!3m2!1spl!2spl!4v1676455288644!5m2!1spl!2spl"
            width="100%"
            height="550"
            loading="lazy"
            allowFullScreen=""
            aria-hidden="false"
          ></iframe>
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modeRedux: state.toggleMode,
  };
};

export default connect(mapStateToProps, null)(Contact);
