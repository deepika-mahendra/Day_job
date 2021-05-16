import { Component, OnInit } from '@angular/core';
import { WorkreqService } from '../add-workrequirement/workreq.service';

import { ApplicationService } from '../view-requirements/application.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder } from '@angular/forms';
import { WorkmappingService } from '../work-mapp/workmapping.service';
import { SharedService } from '../login/shared.service';
import { WorkMap } from '../work-mapp/workMap';
@Component({
  selector: 'app-view-work-history',
  templateUrl: './view-work-history.component.html',
  styleUrls: ['./view-work-history.component.scss']
})
export class ViewWorkHistoryComponent implements OnInit {
  assignedwork:any;
  work: any=[];
  workList:any;
  end_date: Date;
  req: WorkMap=new WorkMap();
  docs :any=[];
  works: any;
  constructor(private workreqService:WorkreqService,
    private sharedService:SharedService,
    private applicationService:ApplicationService,
    private _snackBar: MatSnackBar,private router :Router
    ,private fb:FormBuilder,private workmappingService:WorkmappingService) { }
    
    currentUser:any=[];
  ngOnInit(): void {
    this.getCurrentUser();
    this.getuserworkMapping();
  }
  getCurrentUser(){
    this.sharedService.currentData.subscribe(data =>{
      this.currentUser = data;
      console.log(this.currentUser);
    });
  }
  getuserworkMapping(){
    this.workmappingService.getWorkmap(this.currentUser._id).subscribe(data=>{
      this.assignedwork=data;
      this.workList=this.assignedwork.filter(item=>item.isActive=="False")
    })
  }

}
