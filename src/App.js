import React, { useReducer } from 'react';

import './App.css';
import Work  from './Work';
import CounterHooks from './CounterHooks';
import CounterWithClass from './CounterWithClass';
// import Parent from './Component/Parent';
import Loading from './Component/Loading';
import ListRendering from './Component/ListRendering';
import Parentc from './Component/Parentc';
import Ref from './Component/Ref';
import ParentRef from './Component/ParentRef';
import FRParentInput from './Component/FRParentInput';
import HeroError from './Component/HeroError';
import ErrorBoundary from './Component/ErrorBoundary';
import HOCcounter from './Component/HOCcounter';
import ClickHOC from './Component/ClickHOC';
import  HoverHOC from './Component/HoverHOC';
import { UserProvider } from './Component/UserContext';
import Post from './HTTP/Post';
import PostForm from './HTTP/PostForm';
import UseStateOfArray from './HooksExample/UseStateOfArray';
import UseEffectExample from './HooksExample/UseEffectExample';
import UseEffectFetching from './HooksExample/UseEffectFetching';
import UseReducerHook from './HooksExample/UseReducerHook';
import UseReducerComplex from './HooksExample/UseReducerComplex';
import MultipleUseReducer from './HooksExample/MultipleUseReducer';
import ComponentA from './HooksExample/ComponentA';
import ComponentB from './HooksExample/ComponentB';
import ComponentC from './HooksExample/ComponentC';
import ReducerFetching from './ReducerforFetching/ReducerFetching';
import ReducerFetching2 from './ReducerforFetching/ReducerFetching2';
 import Parent from './CallbackHook/Parent'; 
import CandyDispenser from './CallbackHook/CandyDispenser';
import MemoExample from './MemoHook/MemoExample';
import RefHookExample from './RefHook/RefHookExample';

import AnotherRefHook from './RefHook/AnotherRefHook';
import Counter1 from './customHooks/Counter1';
import Counter2 from './customHooks/Counter2';
import IncreDecreReset1 from './customHooks/IncreDecreReset1';
import IncreDecreReset2 from './customHooks/IncreDecreReset2';
import UserForm from './NewCustomHook/UserForm';


//useContext 
  // export const UserContext = React.createContext()
  
   // export const ChannelContext = React.createContext()

  // const initialState = 0
  // const reducer = (state, action) => {
  
  //     switch(action){
  
  //        case 'increment':
  //            return state + 1
  //        case 'decrement':
  //         return state - 1
          
  //        case 'reset':
  //         return initialState
  //         default:
  //             return state
       
  //     }
  // }
  

function App() {

  // const[count, dispatch] =  useReducer(reducer,initialState);

  return (
    // <UserContext.Provider 
    // value={{countState:count, countDispatch: dispatch}}>
    <div className='App'>
      {/* This count variable shared across component */}
      {/* Count - {count} */}
   {/* ---------Exercise for useReducer+useContext --------- */}
  {/* <ComponentA/>
  <ComponentB/>
  <ComponentC/> */}

        {/* <p style={{fontStyle:"italic", color:"#7fff00"}}>Thank you
        for Visiting my Page</p>  */}
        {/* <Work/> */}
        {/* <CounterHooks name = "shivam"/> */}
        {/* <CounterWithClass name="Shivam stay happy"/> */}
        {/* <Parent/> */}
        {/* <Loading/> */}
        {/* <ListRendering/> */}       
          {/* <Parentc /> */}
          {/* <Ref/> */}
          {/* <ParentRef/> */}
          {/* <FRParentInput/> */}
          {/* <ErrorBoundary>
          <HeroError heroName="spider"/>
          </ErrorBoundary>
          <ErrorBoundary>
          <HeroError heroName="Batman"/>
          </ErrorBoundary>
          <ErrorBoundary>
          <HeroError heroName="joker"/>
          </ErrorBoundary> */}
        {/* <ErrorBoundary>
          <ClickHOC name="shivam"/>
          </ErrorBoundary >
          <HoverHOC name = "heyvishal"/> */}
          {/* <UserProvider value = "shivam">
          <ComponentC/>
          </UserProvider> */}
          {/* <Post/> */}
          {/* <PostForm/> */}
  {/* <UseStateOfArray/> */}
  {/* <UseEffectExample/> */}
  {/* <UseEffectFetching/> */}
{/* 
          <UserContext.Provider value="shivam">
            <ChannelContext.Provider value="code">
            <ComponentC/>
            </ChannelContext.Provider>
          </UserContext.Provider> */}
    {/* <UseReducerHook/> */}
    {/* <UseReducerComplex/> */}
          {/* <MultipleUseReducer/> */} 
          {/* <ReducerFetching/> */}
          {/* <ReducerFetching2/> */}
          {/* <Parent/> */}
          {/* <CandyDispenser/> */}
         {/* <MemoExample/>  */}
         {/* <RefHookExample/> */}
       {/* <AnotherRefHook/> */}
       {/* <Counter1/>
       <Counter2/> */}
       {/* <IncreDecreReset1/>
       <IncreDecreReset2/> */}
       {/* <UserForm/> */}
       <Work/>
   </div>
  //  </UserContext.Provider>
  );
}


export default App;
