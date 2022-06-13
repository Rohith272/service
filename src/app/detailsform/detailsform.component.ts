import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MainserviceService } from '../service/mainservice.service';

@Component({
  selector: 'app-detailsform',
  templateUrl: './detailsform.component.html',
  styleUrls: ['./detailsform.component.css']
})
export class DetailsformComponent implements OnInit {
  @Output() update= new EventEmitter<object>()
  @Input() student:any = new Student();
  constructor(private service:MainserviceService) { 

  }

  ngOnInit(): void {
  }

  addNewStudent(){
    this.student =new Student();
  }
}

export class Student{
  name: any = "";
  cls: any = "";
  phone: any = "";
}


