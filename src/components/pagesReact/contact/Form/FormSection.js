import React from "react";
import * as styles from "./FormSection.module.scss";
import Form from "./Form";
import { FaUserCircle } from "react-icons/fa";

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
          <span className={`${styles.title} ${modeRedux && styles.dark_mode}`}>
            Adres:
          </span>
          <p className={`${styles.sub_title} ${modeRedux && styles.dark_mode}`}>
            ul. Walońska 13/20, 50-413 Wrocław
          </p>
        </div>
      </div>
      <div className={styles.contact_item}>
        <div className={styles.contact_item_icon}>
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className="item_description">
          <span className={`${styles.title} ${modeRedux && styles.dark_mode}`}>
            NIP
          </span>
          <p className={`${styles.sub_title} ${modeRedux && styles.dark_mode}`}>
            8842810270
          </p>
        </div>
      </div>
      <div className={styles.contact_item}>
        <div className={styles.contact_item_icon}>
          <i className="fas fa-phone"></i>
        </div>
        <div className="item_description">
          <span
            className={`${styles.title} ${modeRedux && styles.dark_mode}`}
            style={{ paddingBottom: "10px" }}
          >
            Numer telefonu:
          </span>
          {/* <p className={`${styles.sub_title} ${modeRedux && styles.dark_mode}`}>
            <a href="tel:+48-728-489-061">
              <p
                style={{
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  color: "#7A7A7A",
                }}
              >
                <FaUserCircle style={{ marginRight: "5px" }} />
                Kornel Naróg
              </p>
              <span style={{ color: "#7b7b7b", fontWeight: "600" }}>
                728-489-061
              </span>
            </a>
          </p> */}
          <p className={`${styles.sub_title} ${modeRedux && styles.dark_mode}`}>
            <a href="tel:+48-793-086-672">
              <p
                style={{
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  color: "#7A7A7A",
                  marginBottom: "5px",
                  marginTop: "5px",
                }}
              >
                <FaUserCircle style={{ marginRight: "5px" }} />
                Sebastian Skóra
              </p>
              <span style={{ color: "#7b7b7b", fontWeight: "600" }}>
                793-086-672
              </span>
            </a>
          </p>
        </div>
      </div>
      <div className={styles.contact_item}>
        <div className={styles.contact_item_icon}>
          <i className="far fa-envelope"></i>
        </div>
        <div className={styles.item_description}>
          <span className={`${styles.title} ${modeRedux && styles.dark_mode}`}>
            Email:
          </span>
          <a
            href="mailto:enzodev@post.pl"
            title="Email"
            className={`${styles.sub_title} ${modeRedux && styles.dark_mode}`}
          >
            biuro@eswipe.pl
          </a>
        </div>
      </div>
      <div className={styles.contact_item}>
        <div className={styles.contact_item_icon}>
          <i class="far fa-clock"></i>
        </div>
        <div className="item_description">
          <span className={`${styles.title} ${modeRedux && styles.dark_mode}`}>
            Godziny pracy:
          </span>
          <p className={`${styles.sub_title} ${modeRedux && styles.dark_mode}`}>
            10:00-20:00
          </p>
        </div>
      </div>
    </div>

    <Form modeRedux={modeRedux} />
  </section>
);
export default FormSection;
