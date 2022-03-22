import React, { Component } from 'react'
import RefForClassComponent from './RefForClassComponent'

 class ParentRef extends Component {
     constructor(props) {
       super(props)
     this.CompRef = React.createRef()
     }

handle = () => {
    // console.log(this.CompRef)
    this.CompRef.current.focusInput()
}

  render() {
    return (
      <div>ParentRef
<RefForClassComponent ref={this.CompRef}/>
<button onClick={this.handle}>Hit it!</button>
      </div>
    )
  }
}

export default ParentRef