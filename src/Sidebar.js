import React, { Component } from 'react';
import './Sidebar.css';
import Slider from 'react-slick';

import Result from './Result';

class Sidebar extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: "unslick"
        }
      ]
    };

    return (
      <Slider {...settings}>
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </Slider>
    );
  }
}

export default Sidebar;
