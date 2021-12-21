import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-showemp',
  templateUrl: './showemp.component.html',
  styleUrls: ['./showemp.component.css']
})
export class ShowempComponent implements OnInit {
       employees:any;
  constructor(private service :EmpService) { 
  //   this.employees = [{empId: 100,empName: 'PASHA',salary:100000,gender:'m',phone: 8457685745,country :'India',doj : '07/07/2012'},
  //    {empId:101,empName: 'HARSHA',salary:999985.9,gender:'m',phone: 976856356,country :'USA',doj:'06/25/2010'},
  //   {empId:102,empName: 'SANJANA',salary: 127894.5,gender: 'f',phone: 9554585661,country :'Australia',doj:'02/15/2015'},
  // ];
  }

  ngOnInit(): void {
    this.service.showAllEmployees().subscribe((result) => {console.log(result); this.employees=result;});
  }
 /* deleteEmp(employee : any)
  {
    console.log(employee)
  }*/
    deleteEmp(employee: any){
    console.log(employee)
    this.service.deleteEmp(employee).subscribe((result: any)=>{
    const i = this.employees.findIndex((element:any)=>{
         return element._id === employee._id;
      });
      this.employees.splice(i,1);
     });
      }
    
}

 









