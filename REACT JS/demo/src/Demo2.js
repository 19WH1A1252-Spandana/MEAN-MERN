import React,{useState} from 'react';


import {Button} from 'reactstrap';



                 const Demo2 = () => { 
                    const  employees = [
                         {empId:101,empName: 'PASHA',salary:'100000',gender:'M',mobile:9797979754},
                         {empId:102,empName: 'HARSHA',salary:'100000',gender:'M',mobile:9797979754},
                         {empId:103,empName: 'INDIRA',salary:'100000',gender:'F',mobile:9797979754},
                         {empId:104,empName: 'ASOKAN',salary:'100000',gender:'M',mobile:9797979754},
                     ]
                
                const [myArray,setArray] = useState(employees);
                const clearArray = () =>
                {
                    setArray([]);
                }
                 return (<div>
                    <div class = "container">
    <table class = "table table-bordered table-striped table-hover table-sm">
       <thead>
        <tr class = "bg-info text-black"><th>ID</th><th>Name</th><th>Salary</th><th>Gender</th>
            <th>Mobile</th></tr>
        </thead>
        <tbody>
            {myArray.map((employees) => (
            
            
        <tr key = {employees.empId} >
            <td>{employees.empId}</td>
            <td>{employees.empName}</td>
            <td>{employees.salary}</td>
            <td>{employees.gender}</td>
            <td>{employees.mobile}</td>
        </tr>
            ))}
        </tbody>
    </table>
    <Button outline color = "warning" onClick = {clearArray}>Clear All</Button>
    </div>
    </div>
    )
            }
export default Demo2;         
