import React, { Component } from "react";
import Reviews from "../Reviews";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  componentDidMount() {
    let productId = this.props.match.params.productId;
    fetch("/data/data.json")
      .then(res => res.json())
      .then(products => {
        let result = products.find(product => product.productId == productId);
        this.setState({ product: result });
        console.log(this.state.product.reviews);
      });
  }
  render() {
    return (
      <div>
        {this.state.product ? (
          <div>
            <h1>{this.state.product.productName}</h1>
            <Reviews reviews={this.state.product.reviews}></Reviews>
          </div>
        ) : null}
      </div>
    );
  }
}
