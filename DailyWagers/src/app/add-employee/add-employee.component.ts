import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';


import { ApplicationService } from '../view-requirements/application.service';
import { WorkmappingService } from '../work-mapp/workmapping.service';

import { WorkreqService } from '../add-workrequirement/workreq.service';
import { Application } from '../view-requirements/application';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})


export class AddEmployeeComponent implements OnInit {
  workmapping: any;
  workList: any;
  disable:Boolean = true;
  docs :any=[];
  applicationD:any;
  application:Application=new Application();
  workReq:any;
  constructor(private applicationService:ApplicationService,
    private workmappigService:WorkmappingService,private workreqService : WorkreqService) { }

  employeeList:any=[];
  applicationdetail:any=[];
  ngOnInit(): void {
   this.workreqService.getWorkreq().subscribe(data =>{
     this.workReq = data;
     this.workList= this.workReq.filter(item=>item.isActive=="True");
     
     console.log(this.workList);
   });
   this.appliedwork(this.workList);
  }
  appliedwork(id){
    this.applicationService.getApplication(id).subscribe(data => {
      this.applicationdetail = data;
      this.docs=this.applicationdetail.docs;
      // this.applicationD=this.docs;
      console.log(this.docs);
    })
  }
assignWork(employee_id,req_id){
  console.log(employee_id);
  console.log(req_id);
  this.application.employee_id=employee_id;
  this.application.req_id=req_id;
  this.application.isActive="True";
  this.application.created_dt=new Date();
  this.workmappigService.createWorkmap(this.application).subscribe(data => {

    alert("work assigned");
    console.log(data);

  },
  
err => console.log(err));
}

}
