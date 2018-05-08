import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ContentPage.style.css";
import { product } from "../../assets";
import assets from "../../assets";
import { Banner, Gallery } from "../../components";

export default class ContentPage extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div class="content-page">
        <Banner background={assets.banner} />
        <Gallery images={product} />
      </div>
    );
  }
}
