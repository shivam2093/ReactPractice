import React, { useReducer } from 'react'


const initialState = {
    firstCounter: 0,
    secondCounter:10
}
const reducer = (state, action) => {

    switch(action.type){

       case 'increment':
           return {...state, firstCounter: state.firstCounter + action.value}
       case 'decrement':
        return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return {...state,secondCounter: state.secondCounter + action.value}
        case 'decrement2':
         return {...state,secondCounter: state.secondCounter - action.value}
         
       case 'reset':
        return {...state,initialState}
        default:
            return state
     
    }
}

function UseReducerComplex() {

      const[newState,dispatch] =  useReducer(reducer , initialState)

    return (
    <div>
        <div>
      <div>{newState.firstCounter} </div>
      <div> {newState.secondCounter}</div> 
      </div>
    <button onClick={() => dispatch({type:'increment',value:1})}>Increment</button>
    <button onClick={() => dispatch({type:'decrement',value:1})}>decrement</button>
    <button onClick={() => dispatch({type:'increment',value:5})}>Increment5</button>
    <button onClick={() => dispatch({type:'decrement',value:5})}>decrement5</button>    
    <button onClick={() => dispatch({type:'increment2',value:1})}>Increment2</button>
    <button onClick={() => dispatch({type:'decrement2',value:1})}>decrement2</button>    
       
        <button onClick={() => dispatch({type:'reset'})}>reset</button>

    
    </div>
           )

}

export default UseReducerComplex