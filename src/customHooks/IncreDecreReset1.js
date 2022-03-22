import React,{useState} from 'react'
import useCounter from './useCounter';

function IncreDecreReset1() {
    const[count,Increment,Decrement,reset] = useCounter(10);

  

  return (
    <div>
        <h1>CustomHook</h1>
        <div>{count}</div>
            
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default IncreDecreReset1