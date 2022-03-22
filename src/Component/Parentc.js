import React, { Component } from 'react'
import Memoc from './Memoc'
import Purec from './Purec'
import Regc from './Regc'

 class Parentc extends Component {
constructor(props) {
  super(props)

  this.state = {
     name:"shivam"
  }
}

    // componentDidMount(){
    //     setInterval(() => {
    //         this.setState({
    //             name: "vishal"
    //         })
    //     },2000)}

  render() {
    console.log("-------------ParentComponent------------")
    return (
      <div> Parentc
{/* <Purec name={this.state.name}/>
<Regc  name={this.state.name}/> */}

    <Memoc name = {this.state.name}/>
      </div>
    )
  }
}

export default Parentc