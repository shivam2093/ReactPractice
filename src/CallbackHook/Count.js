import React from 'react'

function Count({text,count}) {
    console.log('from Count',text)
  return (
    <div>
        <div>{text} </div> 
    <h1>{count}</h1></div>
  )
}

export default React.memo(Count)