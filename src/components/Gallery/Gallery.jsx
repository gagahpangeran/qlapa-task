import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Gallery.style.css";
import Photo from "../Photo/Photo";

export default class Gallery extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.galleryContent = React.createRef();
    this.state = { pos: 0 };
  }

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

  galleryMove(direction) {
    let movement = this.galleryContent.current.offsetWidth / 6;
    this.setState({
      pos:
        direction === "left"
          ? this.state.pos === 0 ? -(movement * 4) : this.state.pos + movement
          : this.state.pos === -(movement * 4) ? 0 : this.state.pos - movement
    });
  }

  render() {
    let position = this.state.pos + "px";
    return (
      <div className="gallery">
        <button
          class="gallery__left-button"
          onClick={() => this.galleryMove("left")}
        />
        <div className="gallery__content">
          <div
            className="gallery__content__wrap"
            style={{ left: position }}
            ref={this.galleryContent}
          >
            <div className="row">{this.renderPhoto(1)}</div>
            <div className="row">{this.renderPhoto(2)}</div>
          </div>
        </div>
        <button
          class="gallery__right-button"
          onClick={() => this.galleryMove("right")}
        />
      </div>
    );
  }
}
