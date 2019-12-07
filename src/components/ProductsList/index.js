import React, { Component } from "react";
import { findByLabelText } from "@testing-library/dom";

export default class index extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h1>Products List</h1>
        <div style={{ marginTop: 20 }}>
          <div className="list-group">
            <button
              type="button"
              class="list-group-item list-group-item-action"
            >
              Nokia Phone
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Microphone
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Morbi leo risus
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Porta ac consectetur ac
            </button>
          </div>
        </div>
      </div>
    );
  }
}
