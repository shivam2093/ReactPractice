import React, { Component } from 'react'

export class Regc extends Component {
  render() {
    console.log("-------------RegComponent------------")
    return (
      <div>Regc {this.props.name}</div>
    )
  }
}

export default Regc