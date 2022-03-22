import axios from 'axios'
import React, { useEffect,useState } from 'react'

function UseEffectFetching() {

    const[posts,setPosts] = useState({})
    const[id,setId] = useState(1)
//   useEffect(() => {
//       console.log('check')
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(res => {
//         console.log(res)
//         setPosts(res.data)
//     })
//   },[])  

  useEffect(() => {
      console.log('check')
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
        console.log(res)
        setPosts(res.data)
    }).catch(err => console.log(err))
  },[id])  

  return (
    <div>UseEffectFetching
      <input type="text" value={id} 
      onChange={e => setId(e.target.value)}/> 
      <div>{posts.title}</div> 

    {/* //     <ul>
    // {
    //     posts.map(post => (
    //         <li key={post.id}>{post.title}</li> 
    //     ))
    // }
    //     </ul> */}

    </div>
  )
}

export default UseEffectFetching