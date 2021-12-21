import React, { Component } from 'react'
export default class Counter extends React.Component{
    constructor()
    {
        super()
    
           this.state = {count:1}
           
    }
    increament()
    {
        const countinc = this.state.count + 1;
        this.setState({count :countinc})
    }
    decreament()
    {
        const deccount = this.state.count - 1;
        this.setState({count:deccount})
    }
    render()
    {
        return(<div>
            <h1>{this.state.count}</h1>
            <button onClick = {() => this.increament()}> click to increament count</button><br/>
            <button onClick = {() => this.decreament()}> click to decreament count</button>

            
        </div>)
    }
}