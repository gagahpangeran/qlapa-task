import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Gallery.style.css";
import Photo from "../Photo/Photo";

export default class Gallery extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired
  };

  static defaultProps = {};

  renderGalleryContent() {
    const { images } = this.props;
    return images.map(image => <Photo image={image} />);
  }

  render() {
    return (
      <div className="gallery">
        <div className="gallery__content">{this.renderGalleryContent()}</div>
      </div>
    );
  }
}
