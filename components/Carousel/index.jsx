import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwsSliderStyles from "../../styles/Carousel.module.scss";

const AutoPlaySlider = withAutoplay(AwesomeSlider);

const Carousel = () => (
    <AutoPlaySlider
      cssModule={AwsSliderStyles}
      className="awssld mb-5"
      play={true}
      cancelOnInteraction={true}
      interval={6000}
    >
      <div data-src="/images/villa.jpeg" />
      <div data-src="/images/apartment.jpeg" />
      <div data-src="/images/pool.jpeg" />
    </AutoPlaySlider>
);


export default Carousel;
