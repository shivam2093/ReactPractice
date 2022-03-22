import React, { Component } from 'react'
import { UserConsumer } from './UserContext'
import {ChannelContext, consumer, UserContext} from '../App'

 class ComponentF extends Component {
   
  render() {
    return (
      //this is verbose approach
      <>
      <UserContext.Consumer>
          {
              user => {
                return( <ChannelContext.Consumer>
                  {
                    channel =>{
                      return <div>hello {user} this is your
                     {channel} </div>
                    }
              }
                </ChannelContext.Consumer> 
                )

          }}
      </UserContext.Consumer>
      </>
    )
  }
}

export default ComponentF