import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Photo.style.css";

export default class Photo extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired
  };

  static defaultProps = {};

  render() {
    return (
      <div className="photo">
        <a href="product">
          <img src={this.props.image} alt="Product" />
        </a>
      </div>
    );
  }
}
