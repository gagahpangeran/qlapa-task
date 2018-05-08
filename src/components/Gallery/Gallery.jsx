import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Gallery.style.css";
import Photo from "../Photo/Photo";

export default class Gallery extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired
  };

  static defaultProps = {};

  renderPhoto(param) {
    const { images } = this.props;
    let arr = [];
    var begin = param === 1 ? 0 : images.length / 2;
    var end = param === 1 ? images.length / 2 : images.length;
    for (let i = begin; i < end; i++) {
      arr.push(<Photo image={images[i]} />);
    }
    return arr;
  }

  render() {
    const { images } = this.props;
    return (
      <div className="gallery">
        <div class="gallery__left-button" />
        <div className="gallery__content">
          <div class="gallery__content__wrap">
            <div className="row">{this.renderPhoto(1)}</div>
            <div className="row">{this.renderPhoto(2)}</div>
          </div>
        </div>
        <div class="gallery__right-button" />
      </div>
    );
  }
}
