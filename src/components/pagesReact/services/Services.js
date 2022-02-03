import React, { Component } from "react";
import SubpageHeader from "../../smallComponents/SubpageHeader/SubpageHeader";
import * as styles from "./Services.module.scss";
import WhatsOffer from "./WhatsOffer/WhatsOffer";
import Process from "./Process/Process";

class Services extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <section className={styles.services_container}>
          <SubpageHeader>
            <h1 style={{ fontSize: "26px" }}>Usługi</h1>
          </SubpageHeader>

          <WhatsOffer />

          <Process />
        </section>
      </>
    );
  }
}
export default Services;
