import React, { Component } from "react";

export default class DetailsThumb extends Component {
  render() {
    const { images, tab, myRef } = this.props;
    return (
      <div className="thumb" ref={myRef}>
        {images.map((img, index) => (
          <img onClick={() => tab(index)} key={index} src={img} alt="" />
        ))}
      </div>
    );
  }
}
