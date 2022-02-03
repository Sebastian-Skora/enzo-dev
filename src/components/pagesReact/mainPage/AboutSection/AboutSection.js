import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import * as styles from "./AboutSection.module.scss";
import styled from "styled-components";
import { connect } from "react-redux";
import StarsSVG from "../../../assets/svgs/stars.svg";
const items_array = [
  {
    icon: "fas fa-code",
    main_text: "MODUŁOWY KOD ",
    sub_text:
      "Budujemy projekty od podstaw używając czysty kod wielokrotnego użytku , co daje nam możliwość łatwej rozbudowy strony internetowej. ",
  },
  {
    icon: "fas fa-desktop",
    main_text: "USER EXPERIENCE",
    sub_text:
      "Idealnie dobrany projekt UX/ UI pozwoli na najlepsze wyniki sprzedaży produktu lub odsłon strony . Zapewni nam również płynność i czytelność strony.",
  },
  {
    icon: "fas fa-database",
    main_text: "ZARZĄDZANIE TREŚCIĄ",
    sub_text:
      "Zarządzanie treścią strony internetowej przy użyciu systemu CMS to najlepsza opcja do łatwego prowadzenia serwisu WWW.",
  },
];

class AboutSection extends Component {
  render() {
    const { modeRedux } = this.props;
    return (
      <section
        className={`${styles.section_container} ${
          modeRedux && styles.dark_mode
        }`}
      >
        <div className={styles.slide_up}>
          <Fade bottom>
            <div className={styles.description_container}>
              <p className={styles.logo}>
                <span
                  style={{
                    color: "#666",
                  }}
                >
                  EN
                </span>
                <span style={{ color: "#bda67d" }}>ZO</span>
              </p>
              <h3 style={{ color: modeRedux ? "#ffffff" : "#000000" }}>
                Strony/Sklepy internetowe & aplikacje mobilne
              </h3>
              <p
                className={`${styles.description} ${
                  modeRedux && styles.dark_mode
                }`}
              >
                Strona internetowa lub aplikacja mobilna w dzisiejszych czasach
                jest świetną wizytówką firmy. Dlatego oferujemy wysokiej jakości
                strony oraz aplikacje internetowe na zamówienie. Dobieramy
                najlepsze rozwiązania dla klienta. Zapewniamy wsparcie
                programistyczne przez pierwszy rok oraz szkolenie, niezbędne do
                prowadzenia strony.
              </p>
            </div>

            <div className={`${styles.title} ${modeRedux && styles.dark_mode}`}>
              <p>DLACZEGO MY?</p>
            </div>
            <div className={styles.icon_text_container}>
              {items_array.map((item) => (
                <div className={styles.item} key={item.main_text}>
                  <div className={styles.circle}>
                    <i
                      className={item.icon}
                      style={{ fontSize: "29px", color: "#bfa67a" }}
                    ></i>
                  </div>
                  <div className={styles.item_text_container}>
                    <h2
                      className={`${styles.main_text} ${
                        modeRedux && styles.dark_mode
                      }`}
                    >
                      {item.main_text}
                    </h2>
                    <p
                      className={`${styles.sub_text} ${
                        modeRedux && styles.dark_mode
                      }`}
                    >
                      {item.sub_text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
        <div className={styles.stars}>
          <img src={StarsSVG} />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modeRedux: state.toggleMode,
  };
};

export default connect(mapStateToProps, null)(AboutSection);
