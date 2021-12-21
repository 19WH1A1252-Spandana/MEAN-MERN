import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
          loginId : string;
          password : string;
          employee:any;
  constructor(private router : Router,private service:EmpService) { 
    this.loginId = '';
    this.password = '';
    this.employee = [{id:1,name:'PASHA',email:'pasha123@gmail.com',password:'password'},
  {id:2,name:'HARSHA',email:'harsha123@gmail.com',password:'password'},
  {id:3,name:'RAHUL',email:'rahul123@gmail.com',password:'password'}];
  }

  ngOnInit(): void {
  }

  // loginSubmit() : void{
  //   console.log('Login Id:' +this.loginId)
  //   console.log('password:' +this.password)
  //   if(this.loginId === 'HR' && this.password === 'HR')
  //   {
      
  //     alert('Welcome to HR Home Page...');
  //   }
  //   else
  //   {
  //     this.employee.forEach((element:any) =>
  //     {
  //       console.log(element.email);
  //       if(element.email === this.loginId && element.password === this.password)
  //       {
  //         alert('Welcome to Employee Home Page...')
  //       }
  //     });
  //   }
  // }
  async loginSubmit2(loginForm : any){
    if(loginForm.email === 'HR' && loginForm.password === 'HR')
    {
      alert('Welcome to HR Home Page...');
      this.service.setUserLoggedIn();
      this.router.navigate(['hrhome']);
      
    }
    else
    {
      // this.employee.forEach((element:any) =>
      // {
      //   if(element.email === this.loginId && element.password === this.password)
      //   {
      //     this.service.setUserLoggedIn();
      //     alert('Welcome to Employee Home Page...')
      //   }
      // });
      
      await this.service.getEmployeeByEmailAndPassword(loginForm).then((result:any)=> {console.log(result);this.employee=result});
      this.service.setUserLoggedIn();
      if(this.employee != null)
      {
        console.log("Data Fetched:" ,this.employee);
        alert("Welcome to Employee Home Page...");
      }
    }
  }
    //console.log(loginForm);
    //console.log(loginForm.value.loginID);
    //console.log(loginForm.value.password);
  }