import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Banner.style.css";

export default class Banner extends Component {
  static propTypes = {
    background: PropTypes.string.isRequired
  };

  static defaultProps = {};

  render() {
    return (
      <div className="banner">
        <a href="#">
          <img src={this.props.background} />
        </a>
      </div>
    );
  }
}
