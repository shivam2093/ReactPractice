import React, { useEffect, useState } from 'react'
import useTitle from './useTitle';

function Counter1() {
const[count, setCount] = useState(0);

useTitle(count)

  return (
    <div>
    <button onClick={() => setCount(count + 1)}>count    {count}</button>
    </div>
  )
}

export default Counter1