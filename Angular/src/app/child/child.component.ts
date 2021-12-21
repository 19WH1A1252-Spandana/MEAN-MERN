import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() c_id : any;
  @Input() c_name : any;
  @Input() c_salary : any;
  constructor() { }
  @Output() send:EventEmitter<any> = new EventEmitter();
  sendData()
  {
    //write a code to send data to parent.
    this.send.emit(this.c_id+".."+this.c_name+".."+this.c_salary);

  }
  ngOnInit(): void {

  }

}
