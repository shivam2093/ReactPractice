import React from 'react'

function Memoc(props) {

    console.log("---------MEMOC-----------")
  return (
    <div>Memoc{props.name}</div>
  )
}

export default  React.memo(Memoc)