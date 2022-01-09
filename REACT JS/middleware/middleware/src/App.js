import React, { Component } from 'react'
import { connect } from 'react-redux'

export  class App extends Component {
  render() {
    return (
      <div>
        <h1> Balance : {this.props.balance} </h1><br/>
        <button onClick = {this.props.deposit}>DEPOSIT</button>
        <button onClick = {this.props.withdraw}>WITHDRAW</button>
      </div>
    )
  }
}
const receive =(state) =>
{
  return{
    balance : state.bal
  }
}

const send = (dispatch) =>
{
  return {
    deposit :() => dispatch({type:"DEPOSIT",value : 5000}),
    withdraw : () => dispatch({type:"WITHDRAW",value : 2000})
  }
}
export default connect(receive,send)(App)