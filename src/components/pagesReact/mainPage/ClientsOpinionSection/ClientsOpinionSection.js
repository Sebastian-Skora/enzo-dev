import React from "react";
import * as styles from "./ClientsOpinionSection.module.scss";
import TextSlider from "./TextSlider/TextSlider";
import Fade from "react-reveal/Fade";
const ClientsOpinionSection = () => {
  return (

    <section className={styles.clients_opinion_container}>
      <TextSlider />
    </section>

  );
};

export default ClientsOpinionSection;
