import React, { Component } from "react";
import * as styles from "./Form.module.scss";
import emailjs from "emailjs-com";
import PopUp from "../PopUp/PopUp";
import Loader from "../../../smallComponents/Loader/Loader";
import { FaFacebookMessenger } from "react-icons/fa";
import LoaderMessenger from "../../../smallComponents/LoaderMessenger/LoaderMessenger";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";

class Form extends Component {
  state = {
    showPopUp: false,
    message: "",
    loader: false,
    messengerLoader: false,
  };

  timeOutPopUp = () => {
    setTimeout(() => {
      this.setState({ showPopUp: false });
    }, 3000);
  };

  sendEmail = (e) => {
    e.preventDefault();
    this.setState({ loader: true });
    emailjs
      .sendForm(
        "service_4e3dev4",
        "template_rp57oyc",
        e.target,
        "user_MnTZhFXDHW6j6ueEgoMaj"
      )
      .then(
        (result) => {
          console.log(result.text);
          this.timeOutPopUp();
          this.setState({
            showPopUp: true,
            message: result.text,
            loader: false,
          });
        },
        (error) => {
          console.log(error.text);
          this.timeOutPopUp();
          this.setState({
            showPopUp: true,
            message: error.text,
            loader: false,
          });
        }
      );
    e.target.reset();
  };
  render() {
    const { modeRedux, openMessengerRedux, messengerOpenFunc } = this.props;
    return (
      <>
        <form className={styles.form} onSubmit={this.sendEmail}>
          <input
            className={`${styles.input} ${modeRedux && styles.dark_mode}`}
            name="user_name"
            id="name"
            type="text"
            placeholder="Imię i nazwisko*"
            required
          />
          <input
            className={`${styles.input} ${modeRedux && styles.dark_mode}`}
            name="user_email"
            id="email"
            type="email"
            placeholder="E-mail*"
            required
          />
          <textarea
            className={`${styles.textarea} ${modeRedux && styles.dark_mode}`}
            name="message"
            id="message"
            placeholder="Wiadomość*"
            required
          />
          <button
            type="submit"
            className={styles.submit_btn}
            title="Send Message"
            id="submit-message"
          >
            Wyślij wiadomość
          </button>
          <button
            type="button"
            className={styles.messenger_btn}
            onClick={messengerOpenFunc}
          >
            {!openMessengerRedux && (
              <span>Porozmawiaj z nami na Messenger</span>
            )}
            {openMessengerRedux && <LoaderMessenger />}
            {!openMessengerRedux && (
              <FaFacebookMessenger className={styles.messenger_icon} />
            )}
          </button>
        </form>
        {this.state.loader ? <Loader /> : null}
        <PopUp message={this.state.message} show={this.state.showPopUp} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    openMessengerRedux: state.openMessenger,
    modeRedux: state.toggleMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    messengerOpenFunc: () => dispatch(actions.onOpenMessenger()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
