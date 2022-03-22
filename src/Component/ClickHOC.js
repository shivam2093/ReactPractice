import React, { Component } from 'react'
import HOCcounter from './HOCcounter'

export class ClickHOC extends Component {
    

  render() {
    const{count, handle,name} = this.props
    return (
      <div>
          {name}
          <div>{count} </div>
          <button onClick={handle}>CLICK</button>
      </div>
    )
  }
}

export default  HOCcounter(ClickHOC)