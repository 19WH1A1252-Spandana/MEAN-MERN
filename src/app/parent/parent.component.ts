import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
   employees:any;
  constructor() { }

  ngOnInit(): void 
  {
    this.employees = [{empId: 100,empName: 'PASHA',salary:100000},
    {empId:101,empName: 'HARSHA',salary:999985.9},
   {empId:102,empName: 'SANJANA',salary: 127894.5},
 ];
  }
  showDetails(data: any)
  {
    alert(data);
  }

}


