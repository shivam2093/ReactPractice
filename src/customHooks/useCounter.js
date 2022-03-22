import {useState} from 'react'

function useCounter(initialState = 0) {
  

    const[count , setCount] = useState(initialState)

    const Increment = () => {

        setCount(count + 1)

    }
    const Decrement = () => {

        setCount(count - 1)

    }
    const reset = () => {

        setCount(initialState)

    }

return [count, Increment, Decrement, reset];


}

export default useCounter