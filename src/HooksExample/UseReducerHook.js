
//useReducer is a hook that is used for state management
//alternative to useState
//useState built using UseReducer
// from Javascript reduce methods takes two parameter 
// one reducer function and second initial value which reducer
//function make use of
//reduce vs useReducer
//1
//array.reduce(reducer,initialValue)
//useReducer(reducer, initialState)
//2
// singleValue = reducer(accum,itemValue)
// newState = reducer(currentState, action)
//reduce method returns a single value
//useReducer method returns a pair of values
//[newState, dispatch]
import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {

    switch(action){

       case 'increment':
           return state + 1
       case 'decrement':
        return state - 1
        
       case 'reset':
        return initialState
        default:
            return state
     
    }
}

function UseReducerHook() {

   const[newState, dispatch] =  useReducer(reducer,initialState);

  return (
    <div> <div>
      {newState} 
      </div>
    <button onClick={() => dispatch('increment')}>Increment</button>
    <button onClick={() => dispatch('decrement')}>decrement</button>
    <button onClick={() => dispatch('reset')}>reset</button>
    
    </div>
  )
}

export default UseReducerHook