import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistrationService } from './registration.service';
import { SharedService } from '../login/shared.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SkillService } from '../add-workrequirement/skill.service';

interface gender {
  value: string;
  viewValue: string;
}
interface status {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})

export class ViewProfileComponent implements OnInit {

  profileForm:FormGroup;
  selectedValue: string;
  select: string;
  constructor(private fb:FormBuilder ,
    private _snackBar: MatSnackBar,
    private  registrationService:RegistrationService,
    private sharedService:SharedService,
    private router :Router,
    private http: HttpClient,
    private skillService:SkillService,) { }


    currentUser:any={};
  ngOnInit(): void {
     this.getSkill();
     this.createForm();
     this.getCurrentUser();
  }
  skillList:any=[];
  createForm(){
    this.profileForm = this.fb.group({
      employee_id:[''],
      name:['',Validators.required],
      dob:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      State:['',Validators.required],
      Pin:['',Validators.required],
      contact:['',Validators.required],
      email:['',Validators.required],
      Adhar_no:['',Validators.required],
      experience:['',Validators.required],
      skill_req:['',Validators.required],
      status:['',Validators.required],
      gender:['',Validators.required],
    })
  }
  genders: gender[] = [
    {value: 'female', viewValue: 'Female'},
    {value: 'male', viewValue: 'Male'},
  ];
  statuss: status[] = [
    {value: 'Available', viewValue: 'Available'},
    {value: 'Unavailable', viewValue: 'Unavailable'},
  ];

  save(){
    this.profileForm.value.employee_id = this.currentUser._id;
    this.profileForm.value.skill_req =  this.profileForm.value.skill_req.name;
    this.registrationService.createEmployee( this.profileForm.value).subscribe(data=>{
      this._snackBar.open('detail saved', 'Successfully', {
        duration: 2000,
      });
      this.router.navigate(['user']);
      console.log(data);
  
    },
   err=>console.log(err)) ; 
  }

  getCurrentUser(){
    this.sharedService.currentData.subscribe(data =>{
      this.currentUser = data
    });
  }

  getSkill(){
      this.skillService.getUser().subscribe(data => {
  this.skillList = data;
  console.log(this.skillList);
    },
    err=> console.log(err))
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
