import React, { Component } from "react";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ reviews: newProps.reviews });
    console.log(newProps);
  }
  render() {
    return (
      <div>
        <h2>Reviews</h2>
        {this.state.reviews.length > 0 ? (
          <p>{this.state.reviews[0].review}</p>
        ) : (
          <h3>No reviews</h3>
        )}
      </div>
    );
  }
}
