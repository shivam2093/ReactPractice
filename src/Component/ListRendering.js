import React, { useState } from 'react'
import Mapping from './Mapping'
function ListRendering() {


    const arr1 = [
    {
        name:'shiv',
        age:25,
        healthy:"true"
    },{
        name:'hiren',
        age:33,
        healthy:"true"
    },{
        name:'ashish',
        age:29,
        healthy:"true"
    }]

    const list = arr1.map(p => <Mapping p = {p}/>)
  return (

    <div>
        {list}
    </div>


  )
}

export default ListRendering