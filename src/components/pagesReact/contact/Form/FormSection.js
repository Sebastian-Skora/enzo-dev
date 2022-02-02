import React from "react";
import * as styles from "./FormSection.module.scss";
import Form from "./Form";
import { FaUserCircle } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";

const FormSection = ({ modeRedux }) => (
  <section
    className={`${styles.contact_form} ${modeRedux && styles.dark_mode}`}
  >
    <div className={styles.contact_items_container}>
      <div className={styles.contact_item}>
        <div className={styles.contact_item_icon}>
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className="item_description">
          <h3 className={`${styles.title} ${modeRedux && styles.dark_mode}`}>
            Adres:
          </h3>
          <p className={`${styles.sub_title} ${modeRedux && styles.dark_mode}`}>
            Wrocław
          </p>
        </div>
      </div>
      <div className={styles.contact_item}>
        <div className={styles.contact_item_icon}>
          <i className="fas fa-phone"></i>
        </div>
        <div className="item_description">
          <h3
            className={`${styles.title} ${modeRedux && styles.dark_mode}`}
            style={{ paddingBottom: "10px" }}
          >
            Numer telefonu:
          </h3>
          <p className={`${styles.sub_title} ${modeRedux && styles.dark_mode}`}>
            <a href="tel:+48-728-489-061">
              <p
                style={{
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaUserCircle style={{ marginRight: "5px" }} />
                Kornel Naróg
              </p>
              728-489-061
            </a>
          </p>
          <p className={`${styles.sub_title} ${modeRedux && styles.dark_mode}`}>
            <a href="tel:+48-793-086-672">
              <p
                style={{
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaUserCircle style={{ marginRight: "5px" }} />
                Sebastian Skóra
              </p>
              793-086-672
            </a>
          </p>
        </div>
      </div>
      <div className={styles.contact_item}>
        <div className={styles.contact_item_icon}>
          <i className="far fa-envelope"></i>
        </div>
        <div className="item_description">
          <h3 className={`${styles.title} ${modeRedux && styles.dark_mode}`}>
            Email:
          </h3>
          <a
            href="mailto:enzodev@post.pl"
            title="Email"
            className={`${styles.sub_title} ${modeRedux && styles.dark_mode}`}
          >
            kontakt.enzo.dev@gmail.com
          </a>
        </div>
      </div>
      <div className={styles.contact_item}>
        <div className={styles.contact_item_icon}>
          <i class="far fa-clock"></i>
        </div>
        <div className="item_description">
          <h3 className={`${styles.title} ${modeRedux && styles.dark_mode}`}>
            Godziny pracy:
          </h3>
          <a
            href="mailto:enzodev@post.pl"
            title="Email"
            className={`${styles.sub_title} ${modeRedux && styles.dark_mode}`}
          >
            10:00-18:00
          </a>
        </div>
      </div>
    </div>

    <Form modeRedux={modeRedux} />
  </section>
);
export default FormSection;
