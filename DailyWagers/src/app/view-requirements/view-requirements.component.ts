import { Component, OnInit } from '@angular/core';
import { WorkreqService } from '../add-workrequirement/workreq.service';
import { SharedService } from '../login/shared.service';
import { User } from '../login/login';
import { Application } from './application';
import { WorkReq } from '../add-workrequirement/skill';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApplicationService } from './application.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { WorkrequirementListComponent } from '../workrequirement-list/workrequirement-list.component';

@Component({
  selector: 'app-view-requirements',
  templateUrl: './view-requirements.component.html',
  styleUrls: ['./view-requirements.component.scss']
})
export class ViewRequirementsComponent implements OnInit {
  workList:any=[];

  constructor(private workreqService:WorkreqService,
    private sharedService:SharedService,
    private applicationService:ApplicationService,
    private _snackBar: MatSnackBar,private router :Router
    ,private fb:FormBuilder) { }
    currentUser:any={};
    userObj : Application = new Application();
    workReq:any;
  ngOnInit(): void {
    this.getEmployers();
    this.getCurrentUser();
  }
  getCurrentUser(){
    this.sharedService.currentData.subscribe(data =>{
      this.currentUser = data
    });
  }
  apply(item,event: any) {
    
   
  this.applicationService.getmatchApplication(item._id,this.currentUser._id).subscribe(data=>{
    if(data.length==0){
      console.log("assigned");
      this.userObj.employee_id = this.currentUser._id;
    this.userObj.req_id = item._id;
  
    this.applicationService.createApplication(this.userObj).subscribe(res =>{
      this._snackBar.open('Applied Successfully', 'Success', {
        duration: 2000,
      });
      event.target.disabled = true;
      // this.router.navigate(['user']);
    },
    err =>console.log(err))
    }
    else{
      console.log("already assigned")
      console.log(data)
      this._snackBar.open('Already applied', '', {
        duration: 2000,
      });
    }
  })

  
    
    
  }
  getEmployers(){
    this.workreqService.getWorkreq().subscribe(data => {
  this.workReq = data;
  this.workList=this.workReq.filter(item=>item.isActive=="True")
  console.log(this.workList);
  
    },
    err=> console.log(err)); 
  }
}
