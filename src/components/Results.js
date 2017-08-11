import React, { Component } from 'react';
import './Results.css';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import Result from './Result';

class Results extends Component {
  render() {
    const settings = {
      dots: true,
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
        {this.props.resultInfos.map((resultInfo, idx) =>
          <div key={`result-${idx}`}><Result resultInfo={resultInfo} /></div>
        )}
      </Slider>
    );
  }
}

Results.propTypes = {
  resultInfos: PropTypes.array.isRequired
};

export default Results;
