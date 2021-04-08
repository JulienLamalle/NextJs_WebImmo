import React from "react";
import AwesomeSlider from "react-awesome-slider";
import styles from "../../styles/Carousel.module.css";

const Carousel = () => {
  return (
    <AwesomeSlider
      cssModule={styles}
      className="mb-5"
      animation="cubeAnimation"
    >
      <div data-src="/images/villa.jpeg" />
      <div data-src="/images/apartment.jpeg" />
      <div data-src="/images/pool.jpeg" />
    </AwesomeSlider>
  );
};

export default Carousel;
