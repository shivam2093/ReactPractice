

import React, { useState } from 'react'
import styles from './Work.module.css'
function Work() {
const[name, setFirstName] = useState({firstName:'',lastName:''});


const change = e => {

  setFirstName({...name,firstName: e.target.value})
//console.log([name.firstName],{value: e.target.value})
}

const changeLast = e => {

  setFirstName({...name,lastName: e.target.value})
//console.log([name.firstName],{value: e.target.value})
}

  return (
    <>
<div class={styles.first}>
<input type="text" value={name.firstName} onChange={change}/>

<input type="text"  value={name.lastName} onChange={changeLast}/>

</div>
{/* 
   {name.firstName}
  
 {name.lastName} */}
  {JSON.stringify(name)}
 
    </> 
  )
}

export default Work