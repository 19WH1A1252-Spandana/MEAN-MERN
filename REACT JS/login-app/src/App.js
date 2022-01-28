// function App() {
//   return (
//     <h1> Welcome to Integration App</h1>
//   );
// }

// export default App;
import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component{
       constructor()
       {
         super()
         this.state = {
           records: []
         }
       }
       getData()
       {
           axios.get('http://localhost:3000/fetch').then((result) => {
           console.log(result);
           this.setState({
             record : result.data,
           })//storing into a set
         },(error) => {
           console.log(error);
         })
       }
       render()
       {
         return(
           <div>
                <table>
                  <thead>
                  <tr><th>Id</th><th>Name</th><th>DOJ</th><th>Salary</th><th>Gender</th></tr>
                  </thead>
                  <tbody>
                  {this.state.records.map((element) => (
                    <tr>
                    <td>{element._id}</td>   
                    <td>{element.empId}</td>
                    <td>{element.empName}</td>
                    <td>{element.doj}</td>
                    <td>{element.salary}</td>
                    <td>{element.gender}</td></tr>
                  ))}
                  <tr></tr>
                  </tbody>
                </table>
                 <button onClick = {this.getData()}>Display Data </button>
           </div>
         )
       }
}