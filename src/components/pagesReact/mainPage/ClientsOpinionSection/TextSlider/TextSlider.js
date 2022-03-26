import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./TextSlider.module.scss";
import LaptopPNG from "../../../../assets/svgs/laptop.webp";
import WebPNG from "../../../../assets/svgs/web.webp";
import BasketPNG from "../../../../assets/svgs/basket.webp";
import { StaticImage } from "gatsby-plugin-image";

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
            <StaticImage
              src="../../../../assets/svgs/basket.webp"
              alt="zakupy online"
              width="170px"
              height="170px"
            />
          </div>
          <p className={styles.text}>
            47.3% światowej populacji kupi coś online w{" "}
            {new Date().getFullYear()} roku.
          </p>
        </article>
        <article className={styles.slider_item}>
          <div className={styles.icon}>
            <StaticImage
              src="../../../../assets/svgs/laptop.webp"
              alt="laptop, oferta online"
              width="150px"
              height="170px"
            />
          </div>
          <p className={styles.text}>
            71% kupujących wierzą, że dostaną lepszą ofertę online niż w
            sklepach.
          </p>
        </article>
        <article className={styles.slider_item}>
          <div className={styles.icon}>
            <StaticImage
              src="../../../../assets/svgs/web.webp"
              alt="sklep internetowy"
              width="170px"
              height="170px"
            />
          </div>
          <p className={styles.text}>
            Ile stron internetowych jest w {new Date().getFullYear()}? W
            styczniu {new Date().getFullYear()} było ponad 1.74 miliarda stron
            internetowych w Internecie.
          </p>
        </article>
      </Slider>
    );
  }
}

export default SimpleSlider;
