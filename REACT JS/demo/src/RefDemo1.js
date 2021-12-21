import React, { Component } from 'react'
import {Button} from 'reactstrap'
export default class RefDemo1 extends Component {
    render() {
        return (
            <div>
                <fieldset>
                    <legend>
                        Login
                    </legend>
                    <input type = "text" ref = {loginId} placeholder = "Login Id"/><br/>
                    <input type = "password"ref = {password} placeholder = "Password"/><br/>
                    <Button color = "primary" onClick = {this.login}>Login</Button>
                </fieldset>
            </div>
        )
    }
    login = () => 
    {
        console.log(this.refs.loginId.value)
        let loginId = this.refs.loginId.value;
        let password = this.refs.password.value;
        if(loginId === 'ADMIN' && password === 'ADMIN')
        {
            alert('Login Success')
        }
        else{
            alert('Login Failure')
        }
    }
}
