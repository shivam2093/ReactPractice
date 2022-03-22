import React, { useEffect, useRef } from 'react'

function RefHookExample() {

    const inputRef = useRef(null)

    useEffect(() => {

        inputRef.current.focus();

    },[])

  return (
    <div>RefHookExample

       <input ref={inputRef} /> 
       
    </div>
  )
}

export default RefHookExample