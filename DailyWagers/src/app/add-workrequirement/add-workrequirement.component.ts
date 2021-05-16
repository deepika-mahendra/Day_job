import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Validators } from '@angular/forms';
import { FormGroup , FormBuilder } from '@angular/forms'
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { WorkreqService } from './workreq.service';
import { SkillService } from './skill.service';
import { EmployerService } from '../add-employer/employer.service';
import { Employer } from '../add-employer/employer';
import { Skills } from './skill';

@Component({
  selector: 'app-add-workrequirement',
  templateUrl: './add-workrequirement.component.html',
  styleUrls: ['./add-workrequirement.component.scss']
})
export class AddWorkrequirementComponent implements OnInit {

 
  constructor(    private fb:FormBuilder,
    private _snackBar: MatSnackBar,
    private router :Router,
    private skillService:SkillService,
    private employerService:EmployerService,
    private workreqService:WorkreqService,
    ) { 

  }
  skillList:any=[];
  employerList:any=[];
  createRequirementForm:FormGroup;
  ngOnInit(): void {
    this.getSkill();
    this.createForm();
    this.getEmployers();
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

  createForm(){
    this.createRequirementForm =this.fb.group({
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
    })
  }

  addWorkReq(){
    this.createRequirementForm.value.employer = this.createRequirementForm.value.employer.name;
    this.createRequirementForm.value.skill_req = this.createRequirementForm.value.skill_req.name;
    this.workreqService.createWorkreq( this.createRequirementForm.value).subscribe(data=>{
      this._snackBar.open('Workrequirement Added', 'Successfully', {
        duration: 2000,
      });
      
      console.log(data);
  
    },
   err=>console.log(err)) ; 
  }

}
