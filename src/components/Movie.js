import React, { Component } from "react";

class Movie extends Component {
  render() {
    return (
      <li className="movie">
        <h4>{this.props.children}</h4>
        <a href="{this.props.url}">{this.props.name}</a>
      </li>
    );
  }
}

export default Movie;