import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DetailsformComponent, Student } from './detailsform/detailsform.component';
import { MainserviceService } from './service/mainservice.service';

export interface select{
  name: string;
  cls: string;
  phone: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DetailsformComponent)viewdata !:DetailsformComponent;
  title = 'test';
  listarray =[{"name":"","cls":"","phone":""}];
  elem={"name":"","cls":"","phone":""}
  row: any;
  currentStudent : any = new Student();

  constructor(private service:MainserviceService){
    this.listarray=this.service.GetData();
  }
  
    
  updateList(obj:any){
    this.service.SaveData(obj);
    this.dataSource = new MatTableDataSource<any>(this.listarray);
   }

   public dataSource =new MatTableDataSource<any>([]);
   displayedColumns: string[]=['name','cls','phone'];
   clickedRows = new Set<select>();
   


   send(obj:any){
      this.currentStudent=obj;
   }
}
