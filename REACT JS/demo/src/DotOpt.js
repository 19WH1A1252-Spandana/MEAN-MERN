import React,{useState} from 'react'
import {Button} from 'reactstrap'
const DotOpt = () =>
{
    const[myObject,setMyObject] = useState(
        {
            name : 'PASHA',age:44,gender: 'M'
        }
    )
    const changeMyObject = () => {
            setMyObject({...myObject,name : 'HARSHA'});
    }
    return(
        <div>
           <h1> Name : {myObject.name} Age : {myObject.age} Gender :{myObject.gender} </h1>
           <Button color = "warning" onClick = {changeMyObject}>Change It</Button>
        </div>
    )
}
export default DotOpt;