import React from "react"


const HOCcounter = OriginalComponent => {

class NewComponent extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    handle = () => {
        this.setState(prev => {
            return {count : prev.count + 1}
        })
    }


    render(){

        
        return  <OriginalComponent {...this.props} count={this.state.count} handle = {this.handle}/>
        
    }
}
return NewComponent
}

export default HOCcounter