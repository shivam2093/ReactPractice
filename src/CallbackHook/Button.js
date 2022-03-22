import React from 'react'

function Button({forCount,children}) {
    console.log('from Button' , children)
  return (
    <div>
       <button onClick={forCount}>{children}</button> 
    </div>
  )
}

export default React.memo(Button)