import React, { Component } from 'react'

 class RefForClassComponent extends Component {

    constructor(props) {
      super(props)
  
      this.inputRef = React.createRef()
    }


    focusInput = () => {

        this.inputRef.current.focus()
    }

  render() {
    return (
      <div>RefForClassComponent

<input type="text" ref = {this.inputRef}/>

      </div>
    )
  }
}

export default RefForClassComponent