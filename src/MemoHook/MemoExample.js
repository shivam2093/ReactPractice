import React,{useMemo, useState} from 'react'

function MemoExample() {

const[counterOne, setCounterOne] = useState(0)
const[counterTwo, setCounterTwo] = useState(0)



//here we can see see when hit button counterOne 
//state render and component also render 
//In is Even with long loop take both state to render takes time
//we have to tell react dont calculate whether counterOne even or odd
// when hit counterTwo where UseMemo can be used
//Here we can UseMemo 
// iS A hook that will only recompute when cache value
//one of dependency has changed, this optimization 
//avoid expensive calculation on every render

//useMemo returns cache Value 
//so Now uses cache value from Previous render 
//and avoiding expensive calculations
const isEven = useMemo(() => {
    var i = 0;
while(i < 2000000000) i++;
    return counterOne % 2 == 0
} ,[counterOne])



  return (
    <div>
        <div>
     <button onClick={() => setCounterOne(counterOne + 1)} >
          cOUNTERoNE - {counterOne}</button> 
          {isEven ? 'Even' : 'Odd'}
        <button onClick={() => setCounterTwo(counterTwo + 1)} >
            cOUNTERtwo - {counterTwo}</button>
            </div>

    </div>
  )
}

export default MemoExample