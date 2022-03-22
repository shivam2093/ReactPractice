import React, { useState } from 'react'

function Loading() {

const[load,setLoad] = useState(false);





    if(load){
        return <div>Loading true</div>
    }else{
        return <div>false</div>
    }
  
}

export default Loading