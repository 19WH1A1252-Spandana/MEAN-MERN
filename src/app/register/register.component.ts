import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { EmpService } from '../emp.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
       employee : any;
  constructor(private httpClient : HttpClient, private service:EmpService) { 
    this.employee = {empId:'',empName:'',doj:'',salary:'',gender:'',email:'',password:''};

  }

  ngOnInit(): void {
   //this.httpClient.get('https://restcountries.com/v3/all').subscribe((result:any) =>console.log(result));
    console.log('Data Recieved...');
  }
  // Register(): void {
  //   //console.log('Emp Id: '+this.register.empId);
  //   //console.log('Emp Name: '+this.register.empName);
  //   //console.log('DOJ: '+this.register.doj);
  //   //console.log('Salary: ',+this.register.salary);
  //   //console.log('Gender: ',+this.register.gender);
  //   console.log(this.register);
    
  // }
  registerEmp()
  {
    this.service.registerEmp(this.employee).subscribe();
  }
}
