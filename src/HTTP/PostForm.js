import React, { Component } from 'react'
import axios from 'axios'
export class PostForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        userId: '',
        body:'',
        title:''   
      }
    }

    handle = (e) => {
      console.log('target',e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit = (e) => {
e.preventDefault()
        //console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts",
        this.state)
        .then(res => {
            console.log(res)
        })
        .catch(err =>  {
            console.log(err)
        })
    }

  render() {

    const {userId,body,title} = this.state
    return (
      <div>PostForm
          <form onSubmit={this.submit}>
        <div>
            <input type="text" name = "userId" value={userId}
             onChange={this.handle}
             placeholder="userId"/>
        </div>
        <div>
            <input type="text" name = "title" value={title}
             onChange={this.handle}
             placeholder="title"/>
        </div>
        <div>
            <input type="text" name = "body" value={body}
            onChange={this.handle}
            placeholder="body"/>
        </div>
        
        <button type="submit">submit</button>

          </form>

      </div>
    )
  }
}

export default PostForm