import axios from 'axios'
import React, { useEffect, useReducer } from 'react'


const initialState = {
    loading: true,
    error:'',
    post:{}
}

const reducer = (state , action) => {
switch(action.type){

    case 'FETCH_SUCCESS':
        return {
            loading:false,
            post:action.payload,
            error:''
        }
      case 'FETCH_ERROR':
          return {
              loading: false,
              post:{},
                error:'something wrong'
          }  
         default:
             return state 
}
}

function ReducerFetching2() {
           const[newState, dispatch]  = useReducer(reducer, initialState)

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            // setLoading(false)
            // setPost(res.data)
            // setError('')
            dispatch({type:'FETCH_SUCCESS',payload: res.data})
        })
        .catch(err => {
            // setLoading(false)
            // setPost({})
            // setError('Something wrong')
            dispatch({type:'FETCH_ERROR'})
        })
        },[]) 


    




  return (
    <div>

        {newState.loading ? 'Loading' : newState.post.title}
        {newState.error ? newState.error: null}

    </div>
  )
}

export default ReducerFetching2