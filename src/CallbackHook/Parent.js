import React, { useCallback, useState } from 'react'
import Button from './Button';
import Title from './Title';
import Count from './Count';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

function Parent() {
const[age,setAge] = useState(25);
const[salary, setSalary] = useState(50000);

const forCount = useCallback(() => {
    setAge(age + 50);
},[age])


//when we click for age the salary button also created
//because Parent component renders and 
//when dealing with function always have
// to considerreference equality
// now we need useCallback hook
// useCallback hook that will return a memoized version of the call back
//function that only changes if one of the dependencies has changed
//In short useCallback hooks will cached increment salary function and
//return that if salary is not incremented, if salary has changed only then a new function will
//be returned 
// ------Why need useCallback ------------

// it is useful when passing callbacks to optimized child component
// that rely on reference equality to prevent unnecessary renders
//so when you want to cache function use useCallback
//and want cache of result using function invoke use useMemo
const forButton = useCallback(() => {
setSalary(salary + 10000);
},[salary])
  return (
    <div>
       <Title/>
         <Count text = "ageCount" count = {age}/>
        <Button forCount={forCount}>IncrementAge</Button>
        <Count text = "salaryCount" count = {salary}/>
        <Button forCount={forButton}>Salray</Button>
    </div>
  )
}

export default Parent