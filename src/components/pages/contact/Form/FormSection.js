import React from "react";
import * as styles from "./FormSection.module.scss";
import Form from "./Form";

const FormSection = ({ modeRedux }) => (
  <section className={`${styles.contact_form} ${modeRedux && styles.dark_mode}`}>
    <div className={styles.contact_items_container}>
      <div className={styles.contact_item}>
        <div className={styles.contact_item_icon}>
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className="item_description">
          <h3 className={`${styles.title} ${modeRedux && styles.dark_mode}`}>Adres:</h3>
          <p className={`${styles.sub_title} ${modeRedux && styles.dark_mode}`}>Wrocław</p>
        </div>
      </div>
      <div className={styles.contact_item}>
        <div className={styles.contact_item_icon}>
          <i className="fas fa-phone"></i>
        </div>
        <div className="item_description">
          <h3 className={`${styles.title} ${modeRedux && styles.dark_mode}`}>Numer telefonu:</h3>
          <p className={`${styles.sub_title} ${modeRedux && styles.dark_mode}`}><a href="tel:+48-793-086-672">793-086-672</a>, <a href="tel:+48-728-489-061">728-489-061</a></p>
        </div>
      </div>
      <div className={styles.contact_item}>
        <div className={styles.contact_item_icon}>
          <i className="far fa-envelope"></i>
        </div>
        <div className="item_description">
          <h3 className={`${styles.title} ${modeRedux && styles.dark_mode}`}>Email:</h3>
          <a href="mailto:enzodev@post.pl" title="Email" className={`${styles.sub_title} ${modeRedux && styles.dark_mode}`}>
            enzodev@post.pl
          </a>
        </div>
      </div>
    </div>

    <Form modeRedux={modeRedux} />
  </section>
);
export default FormSection;
