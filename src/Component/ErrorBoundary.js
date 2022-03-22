import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return{
            hasError: true
        }
    }

    componentDidCatch(error , info){
console.log(error)
console.log('check',info)

    }
  render() {

          if(this.state.hasError){
              return <h1>something wrong</h1>
          }else{
            return this.props.children
          }    
  }
}

export default ErrorBoundary