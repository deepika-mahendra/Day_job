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
  selector: 'app-assignwork',
  templateUrl: './assignwork.component.html',
  styleUrls: ['./assignwork.component.scss']
})
export class AssignworkComponent implements OnInit {
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
    this.getuserworkmapping();  
  }
  getuserworkmapping(){
    
        this.workmappingService.getWorkmap(this.currentUser._id).subscribe(data=>{
          this.assignedwork=data;
          console.log(this.assignedwork)
          this.workList=this.assignedwork.filter(item=>item.isActive=="True");
          console.log(this.workList[0].req_id);
           console.log(new Date(this.workList[0].req_id.end_dt).getTime())
         console.log((new Date()).getTime());
        //  this.req.isActive="False";

    for(let i:number=0;i<this.workList.length;i++){
          if (new Date(this.workList[i].req_id.end_dt).getTime()>(new Date()).getTime())  {
           console.log(this.workList[i]._id);
            this.workmappingService.updateWorkMap(this.workList[i]._id,this.req).subscribe(data=>{
              
            })
          console.log("if condition")
          }
          else{
            console.log("else condition");
           
          }
       }
    
        },
       err=>console.log(err)) ; 
      }
      getCurrentUser(){
        this.sharedService.currentData.subscribe(data =>{
          this.currentUser = data;
          console.log(this.currentUser);
        });
      }

}
