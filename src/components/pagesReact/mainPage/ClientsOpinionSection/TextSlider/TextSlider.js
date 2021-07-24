import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./TextSlider.module.scss";

import LaptopPNG from "../../../../assets/svgs/laptop.png";
import WebPNG from "../../../../assets/svgs/web.png";
import BasketPNG from "../../../../assets/svgs/basket.png";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings} autoplay="true" className={styles.slider_container}>
        <article className={styles.slider_item}>
          <div className={styles.icon}>
            <img
              style={{ height: "170px", width: "170px" }}
              src={BasketPNG}
              alt="zakupy online"
            />
          </div>
          <p
            className={styles.text}
          >
            47.3% światowej populacji kupi coś online w {new Date().getFullYear()} roku.
          </p>
        </article>
        <article className={styles.slider_item}>
          <div className={styles.icon}>
            <img
              style={{ height: "170px", width: "170px" }}
              src={LaptopPNG}
              alt="laptop, oferta online"
            />
          </div>
          <p
            className={styles.text}
          >
            71% kupujących wierzą, że dostaną lepszą ofertę online niż w
            sklepach.
          </p>
        </article>
        <article className={styles.slider_item}>
          <div className={styles.icon}>
            <img
              style={{ height: "170px", width: "170px" }}
              src={WebPNG}
              alt="sklep internetowy"
            />
          </div>
          <p
            className={styles.text}
          >
            Ile stron internetowych jest w {new Date().getFullYear()}? W styczniu {new Date().getFullYear()} było ponad 1.74 miliarda
            stron internetowych w Internecie.
          </p>
        </article>
      </Slider>
    );
  }
}

export default SimpleSlider;
