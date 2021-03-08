import React, { Component } from "react";

class Name extends Component {
  render() {
    return (
      <div
        className={"searchResultHolder"}
        style={{
          padding: "4px",
        }}
      >
        <span
          className={"searchResultMatched"}
          style={{
            backgroundColor: "#80DEEA",
            padding: "2px",
          }}
        >
          {this.props.matched}
        </span>
        <span className={"searchResultResults"}> {this.props.result}</span>
      </div>
    );
  }
}

export default Name;
