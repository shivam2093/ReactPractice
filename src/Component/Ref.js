import React, { Component } from 'react'

export class Ref extends Component {
    constructor(props) {
      super(props)
    
   this.inputRef = React.createRef()
    
}


componentDidMount(){
    //called focus method on this input element
   this.inputRef.current.focus()
      
  }

  handle = () => {
    alert(this.inputRef.current.value)
            }
  render() {
    return (
         <div>Ref
          {/* attach ref to this input type
           */}
          <input type="text" ref={this.inputRef}/>
          <button onClick={this.handle}>checkcc</button>
      </div>
    )
  }
}

export default Ref