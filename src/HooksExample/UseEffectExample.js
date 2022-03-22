import React, { useEffect, useState } from 'react'
import CounterHooks from '../CounterHooks'
import HookMouse from './HookMouse'

function UseEffectExample() {

    // const[count, setCount] = useState(0)
    // const[name,setName] = useState('')
const[display , setDisplay] = useState(true)
//replacing ComponentDidMount
// and ComponentDud update with useEffect hooks
//In useEffect we have function as a parameter which renders
//everytime the component renders
// useEffect(() => {
// document.title = `you clicked ${count} times`
// })

//conditionally run useffects
//for conditionaly rendering effect we use second 
//parameter and depend on state change it's render 
// useEffect(() => {

//    console.log('updating the documents'); 

// },[])

//component will Unmount
// if we do not do cleanup code
//then other component still console despite it's 
//being unmounted 
//so we have to reyurn the passed function in Useeffect

    useEffect(() => {

    },[])
  return (
    <div>UseEffectExample
    {/* <input type="text" value={name} 
    onChange={(e) => setName(e.target.value)}/>    
    <button onClick={() => setCount(count + 1)}>Click{count}times</button> */}
<button onClick={() => setDisplay(!display)}>Toggle</button>
   {display && <HookMouse/> }
    </div>
  )
}



export default UseEffectExample