import React, { useState } from 'react'
import "../src/CounterHooks.css"
function CounterHooks({name}) {

    const[count, setCount] = useState(0);
let initialState = 0;
const five = () => {

for(let i = 0; i < 5; i++){
    setCount(prev => prev + 1)
}

}
  return (
    
    <div style={{ flexDirection:"row"}}>
        <div>hello {name}</div>
    <div> {count} </div> 
        <button onClick={five}> INCREMENT BY 5</button>
        <button onClick={() => setCount(prev => prev + 1)}> INCREMENT BY 1</button>
        <button onClick={() => setCount(initialState)}> RESET</button>
        <button onClick={() => setCount(prev => prev - 1)}> DECREMENT</button>
    </div>

  )
}

export default CounterHooks