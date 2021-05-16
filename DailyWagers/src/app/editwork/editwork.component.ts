import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SkillService } from '../add-workrequirement/skill.service';
import { EmployerService } from '../add-employer/employer.service';
import { WorkreqService } from '../add-workrequirement/workreq.service';
import { SharedService } from '../workrequirement-list/shared.service';

@Component({
  selector: 'app-editwork',
  templateUrl: './editwork.component.html',
  styleUrls: ['./editwork.component.scss']
})
export class EditworkComponent implements OnInit {
  createupdateForm: FormGroup;
  workDetail:any;
  getdetail = [];
currentwork = [];
  constructor(    private fb:FormBuilder,
    private _snackBar: MatSnackBar,
    private router :Router,
    private skillService:SkillService,
    private employerService:EmployerService,
    private workreqService:WorkreqService,
    private sharedService:SharedService) { }
    skillList:any=[];
    employerList:any=[];
  ngOnInit(): void {
    this.createForm();
    this.getCurrentworkData();
    this.getSkill();
    this.getEmployers()
  }
  createForm(){
    this.createupdateForm =this.fb.group({
      title:['' ,Validators.required],
      description:['',Validators.required],
     employer:['' ,Validators.required],
      location:['' ,Validators.required],
      skill_req:['' ,Validators.required],
      duration:['' ,Validators.required],
      start_dt:['' ,Validators.required],
      end_dt:['' ,Validators.required],
      benifits:['' ,Validators.required],
      worker_req:['' ,Validators.required],
      payment:['' ,Validators.required],
      url:['' ,Validators.required],
      isActive:['']
    })
  }
  getCurrentworkData(){
    this.sharedService.currentData.subscribe(data =>{
  this.workDetail = data;
  console.log(this.workDetail);
  this.workreqService.getWorkreq().subscribe(data =>{
  this.getdetail=data;
  for(let i = 0 ; i<this.getdetail.length;i++ ){
    if(this.getdetail[i]._id == this.workDetail){
      this.currentwork[0]=this.getdetail[i];
    }
  }
  console.log(this.currentwork);
  })
    })
  }
  getSkill(){
    this.skillService.getUser().subscribe(data => {
  this.skillList = data;
  console.log(this.skillList);
    },
    err=> console.log(err))
  }
  getEmployers(){
    this.employerService.getEmployer().subscribe(data => {
  this.employerList = data;
  console.log(this.employerList);
    },
    err=> console.log(err))
  }


  editwork(){
    this.createupdateForm.value._id= this.currentwork[0]._id;
    this.createupdateForm.value.employer = this.createupdateForm.value.employer.name;
    this.createupdateForm.value.skill_req = this.createupdateForm.value.skill_req.name;
    this.workreqService.updateEmployer(this.createupdateForm.value).subscribe(data=>{
      this._snackBar.open('Updated', 'Successfully', {
        duration: 2000,
      });
      console.log(data);
    },
   err=>console.log(err)) ; 
 console.log(this.createupdateForm.value);
  }

}
