import React from 'react'
import Child from './Child'


function Parent() {
  
    function greet(){
    alert("hello shivam from Parent alertbox")
    }

  return (
    <div>
        <Child greet = {greet}/>
        </div>
  )
}

export default Parent