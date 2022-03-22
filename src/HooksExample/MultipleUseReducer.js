import React, { useReducer } from 'react'


const initialState = 0;

const reducer = (state , action) => {
    switch(action){
        case 'increment':
            return state + 1;
            case 'decrement':
                return state - 1;
                case 'reset':
                    return initialState;
            default:
                return state
    }
}


function MultipleUseReducer() {
// when we need to use multiple state variables and which has 
//same state transition it has good idea to use Multiple UseReducer
           const[newState, dispatch] =  useReducer(reducer,initialState)
        const[countTwo,dispatchTwo] = useReducer(reducer,initialState) 

  return (
    <div>
        <div>{newState}</div>
<button onClick={() => dispatch('increment')}>Increment</button>
    <button onClick={() => dispatch('decrement')}>decrement</button>
    <button onClick={() => dispatch('reset')}>reset</button>
   
    <div>{countTwo}</div>
    <button onClick={() => dispatchTwo('increment')}>Increment</button>
    <button onClick={() => dispatchTwo('decrement')}>decrement</button>
    <button onClick={() => dispatchTwo('reset')}>reset</button>
   


    </div>
  )
}

export default MultipleUseReducer