import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmpService {
  public userLoggedIn : boolean;
  constructor(private httpClient : HttpClient) {
    this.userLoggedIn = false; //initially set to false
   }
   getUserLoggedIn()
   {
     return this.userLoggedIn; // invoked when we need value
   }
   setUserLoggedIn()
   {
     this.userLoggedIn = true; // invoked whenever we logged in successfully
   }
   setUserLoggedOut()
   {
     this.userLoggedIn = false; // invoked wheever we logged out
   }
   showAllEmployees()
   {
    return this.httpClient.get('http://localhost:3000/fetch');
   }
   registerEmp(employee : any)
   {
     return this.httpClient.post('http://localhost:3000/register',employee);
   }
   getEmployeeByEmailAndPassword(loginForm :any)
   {
     return this.httpClient.get('http://localhost:3000/login/'+loginForm.email+"/"+loginForm.password).toPromise();
   }
   deleteEmp(employee:any)
   {
      console.log("Inside Service: "+employee.email)
      return this.httpClient.delete('http://localhost:3000/delete/'+employee.email);
   }
   
   
}