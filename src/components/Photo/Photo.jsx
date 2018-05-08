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
        <a href="#">
          <img src={this.props.image} />
        </a>
      </div>
    );
  }
}
