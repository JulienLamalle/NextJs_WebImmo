import React from "react";
import AwesomeSlider from "react-awesome-slider";
import AwsSliderStyles from "../../styles/Carousel.module.scss";

const Carousel = () => {
  return (
    <AwesomeSlider
      cssModule={AwsSliderStyles}
      className="awssld mb-5"
      animation="cubeAnimation"
    >
      <div data-src="/images/villa.jpeg" />
      <div data-src="/images/apartment.jpeg" />
      <div data-src="/images/pool.jpeg" />
    </AwesomeSlider>
  );
};

export default Carousel;
