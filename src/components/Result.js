import React, { Component } from 'react';
import './Result.css';
import PropTypes from 'prop-types';

class Result extends Component {
  render() {
    const { resultInfo: data } = this.props;
    return (
      <div className="result-wrapper">
        <div className="card result">
          <div className="card-block">
            <h4 className="card-title">{ data.StoreName }</h4>
            <h6 className="card-subtitle mb-3 text-muted">{ data._TypeFormatted }</h6>
            <p className="card-text">
              { data.Address1 }<br/>
              { data.Address2 &&
                <span>
                  {data.Address2}<br/>
                </span>
              }
              { data.City }<br/>
              { data.Postcode }<br/>
              { data.Telephone }
            </p>
            <a target="_blank" href={ data.MapUrl } className="card-link">Directions</a>
          </div>
        </div>
      </div>
    );
  }
}

Result.propTypes = {
  resultInfo: PropTypes.object.isRequired
};

export default Result;
