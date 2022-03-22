import React, { useEffect, useState } from 'react'

function HookMouse() {

const[x,Setx] = useState(0);
const[y,Sety] = useState(0);


const logMouse = (e) => {
console.log('Mouse Event')
    Setx(e.clientX);
    Sety(e.clientY);
    
}

useEffect(() => {
    
    console.log('check event')
    window.addEventListener('mousemove',logMouse)

    //unmount Event by returning the function
    return () => {
        console.log('component unmounted')
        window.removeEventListener('mousemove',logMouse)
    } 

},[])

  return (
    <div>
        Hover {x} and {y}
    </div>
  )
}

export default HookMouse