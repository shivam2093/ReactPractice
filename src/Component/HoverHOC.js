import React, { Component } from 'react'
import HOCcounter from './HOCcounter'

export class HoverHOC extends Component {
    

  render() {
    const{count, handle,name} = this.props
    return (
      <div>
          {name}
          <div>{count} </div>
          <h2 onMouseOver={handle}> HOVERED ABOVE TIMES</h2>
      </div>
    )
  }
}

export default  HOCcounter(HoverHOC)