import React, { Component } from 'react'

export class CounterWithClass extends Component {

    constructor(props) {
      super(props)
    //console.log(props.name)
      this.state = {
         count : 0
      }
      this.counter = this.counter.bind(this)
    }

  
  counter() {
    this.setState({
        count : this.state.count + 1
    })
  }  

  INCFIVE = () => {
      
  } 



  render() {
    const {name} = this.props
    return (
        
      <div>
          <div>{name}</div>
          COUNTER WITH CLASS
       <div>   {this.state.count} </div>
       
          {/* <button onClick={this.counter.bind(this)}>INCREMENT</button> */}
          {/* <button onClick={() => this.counter()}>INCREMENT</button> */}
          <button onClick={this.counter}>INCREMENT</button>
           </div>
    )
  }
}

export default CounterWithClass