import React, { Component } from 'react'
export default class SetState extends React.Component{
    constructor()
    {
        super()
    
           this.state = {
               message : "Welcome to React State Management"
           }
           
    }
    changeMessage()
    {
        this.setState(
        {
           message :  "updated state Message using setState()"
        })
            
               console.log(this.state.message);
    }
    render()
    {
        return(<div>
            <h1>{this.state.message}</h1>
            <button onClick = {() => this.changeMessage()}> Click to Change Message</button>
        </div>)
    }
}