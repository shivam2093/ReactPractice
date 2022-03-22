import React, { useEffect, useRef, useState } from 'react'

function AnotherRefHook() {
    const[timer, setTimer] = useState(0)
//useRef also hold any mutable value
//and also its not causing any effects on rerenders
    const inputRef = useRef()
    useEffect(() => {

        inputRef.current =  setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)

        return () => {
            clearInterval(inputRef.current)
        }
    },[])


  return (
    <div>AnotherRefHook - 
        {timer} 
<button onClick={() => clearInterval(inputRef.current)}>clearInteval</button>
    </div>
  )
}

export default AnotherRefHook