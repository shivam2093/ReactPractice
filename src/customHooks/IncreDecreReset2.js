import React,{useState} from 'react'
import useCounter from './useCounter'

function IncreDecreReset2() {
  
const[count,Increment,Decrement,reset] = useCounter(50);


  return (
    <div>
        <div>{count}</div>
            
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default IncreDecreReset2