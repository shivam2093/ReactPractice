//import React, { useState } from 'react'

// function UseStateOfArray() {
// const[items, setItems] = useState([])


//  const add = () => {

// setItems([...items, {
//     id: items.length,
//     value: Math.floor(Math.random() * 10) + 1
// }])

// }
//   return (
//     <div>UseStateOfArray
     
//     <div> <button onClick={add}>Add some number</button> </div>
//         {
//             items.map(x => <h1>{x.value}</h1>)
//         }
//     </div>
    
//   )
// }
//  export default UseStateOfArray

//useState doesn't automatically merge
//or update the object so we can use
//spread operator for merge
//this is important difference with class 
// Component
// import React, { useState } from 'react'

// function UseStateOfArray() {
//     const[name, setName] = useState({firstName:'',lastName:''})
    
// const valueChange = (e) => {
    //copy every property from name object 
    // and then overwrite the firstname field
//     setName({
//         ...name,
//         firstName : e.target.value,
       
//     })
// }
// const someChange = (e) => {

//     setName({
//         ...name,
//         lastName : e.target.value,
       
//     })
// }
//   return (
//     <div>UseStateOfArray

// <input type="text" value={name.firstName} 
// onChange={valueChange}/>
// <input type="text" value={name.lastName} 
//  onChange={someChange}/>

//     <h1>{name.firstName}</h1>
//     <h1>{name.lastName}</h1>
//     {/* <h1>{JSON.stringify(name)}</h1> */}
//     </div>
//   )
// }

// export default UseStateOfArray

import React, { Component } from 'react'

export class UseStateOfArray extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            
            firstName: '',
            lastName:''
             
      }}
    value = (e) => {
       console.log('on firstname')
        this.setState({
                
                firstName: e.target.value
            
        })}
     
           
    take = (e) => {
        console.log('on lastName')
        this.setState({
            
            lastName: e.target.value
        
    })}
       
  render() {
   const{firstName, lastName}  = this.state
    return (
      <div>UseStateOfArray
<input type="text" 
value={this.state.firstName}
onChange={this.value}/>
<input 

type="text" 
value={this.state.lastName}
onChange={this.take}/>
<h1>{this.state.firstName} </h1> 
 <h2>{this.state.lastName}</h2>
 
      </div>
      
    )
  }
}

export default UseStateOfArray