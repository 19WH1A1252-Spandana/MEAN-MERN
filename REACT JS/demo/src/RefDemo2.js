import Recat,{useRef} from 'react'
import {Button} from 'reactstrap';
const RefDemo2 = () => 
{
const loginId = useRef(null);
const password = useRef(null);
const login = () =>
{
    console.log(loginId.current.value);
    console.log(password.current.value);

}
return (
    <div>
        <fieldset>
            <legend>
                Login
            </legend>
            <input type = "text" ref = {loginId} placeholder = "Login Id"/><br/>
            <input type = "password"ref = {password} placeholder = "Password"/><br/>
            <Button color = "primary" onClick = {login}>Login</Button>
        </fieldset>
    </div>
)
}

export default RefDemo2