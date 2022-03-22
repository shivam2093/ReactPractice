import { PureComponent } from "react";

import React, { Component } from 'react'

export class Purec extends PureComponent {

  render() {
      console.log("-------------PureComponent------------")
    return (
      <div>Pure Component {this.props.name}</div>
    )
  }
}

export default Purec