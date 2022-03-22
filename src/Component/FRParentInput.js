import React, { Component } from 'react'
import FRInput from './FRInput'

export class FRParentInput extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }

    handle = () => {
        this.inputRef.current.focus()
    }

  render() {
    return (
      <div>FRParentInput
         <FRInput ref = {this.inputRef}/>
         <button onClick={this.handle}>FOCUS</button> 
      </div>
    )
  }
}

export default FRParentInput