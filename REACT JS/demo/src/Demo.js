import React,{useState} from 'react'
import {Button } from 'reactstrap' 
const Demo = () => {
    //console.log(useState('React Sessions'))
    const [message,setMessage] = useState('UI Sessions');
  // var message = "UI Sessions";
    const changeMessage = () =>
    {
       // message = 'React Sessions';
        // console.log(message)
        setMessage('React Session');
    }
    return(
        <div>
            <h1>{message}</h1>
            <Button color = "warning" onClick = {changeMessage}> Change MESSAGE </Button>
        </div>
    )
}
export default Demo;