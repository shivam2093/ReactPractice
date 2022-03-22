import React, { Component } from 'react'
import axios from 'axios'

export class Post extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post:[],
         error:''
      }
    }

    componentDidMount(){
        axios.get("https://jsonpaceholder.typicode.com/posts")
        .then(res => 
        this.setState({
            post: res.data
        }))
        .catch(err => {console.log(err)
        this.setState({
            error: 'something wrong'
        })}
        )

    }

  render() {
      const {post,error} = this.state
    return (
      <div>Post
          {
           
           post.length ?
           post.map(post => <div id = {post.id}>
               {post.title}
           </div>) : null
          }{
              error ? <div>{error}</div> : null
          }


      </div>
    )
  }
}

export default Post