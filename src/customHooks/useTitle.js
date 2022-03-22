import React, { useEffect } from 'react'

function useTitle({count}) {

    useEffect(()=>{
        document.title = `Count - ${count}`
    })

}

export default useTitle