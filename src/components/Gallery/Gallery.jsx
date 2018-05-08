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

  galeryMove(direction) {
    this.setState({
      pos:
        direction === "left"
          ? this.state.pos === 0 ? -820 : this.state.pos + 205
          : this.state.pos === -820 ? 0 : this.state.pos - 205
    });
  }

  render() {
    let position = this.state.pos + "px";
    return (
      <div className="gallery">
        <button
          class="gallery__left-button"
          onClick={() => this.galeryMove("left")}
        />
        <div className="gallery__content">
          <div className="gallery__content__wrap" style={{ left: position }}>
            <div className="row">{this.renderPhoto(1)}</div>
            <div className="row">{this.renderPhoto(2)}</div>
          </div>
        </div>
        <button
          class="gallery__right-button"
          onClick={() => this.galeryMove("right")}
        />
      </div>
    );
  }
}
