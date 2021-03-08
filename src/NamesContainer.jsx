import React, { Component } from "react";
import Name from "./Name";
class NamesContainer extends Component {
  render() {
    return (
      <div>
        {this.props.names.map((name) => (
          <Name matched={name[0]} result={name[1]} />
        ))}
      </div>
    );
  }
}

export default NamesContainer;
