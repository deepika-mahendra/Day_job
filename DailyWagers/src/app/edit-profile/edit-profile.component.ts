import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SkillService } from '../add-workrequirement/skill.service';
import { EmployeeService } from '../add-employee/employee.service';
import { RegistrationService } from '../view-profile/registration.service';
import { SharedService } from '../login/shared.service';



@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  profileForm:FormGroup;
 

  profileDetail: any;
  getdetail = [];
  currentemployee = [];

  constructor(private fb:FormBuilder ,
    private _snackBar: MatSnackBar,
    private  registrationService:RegistrationService,
    private sharedService:SharedService,
    private router :Router,
    private http: HttpClient,
    private skillService:SkillService
    ,private employeeService:EmployeeService) { }

    currentUser:any={};
    ngOnInit(): void {
       this.getSkill();
       this. createForm();
      this.getCurrentEmployeeData();
       
    }
    skillList:any=[];
    createForm(){
      this.profileForm = this.fb.group({
       
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
  
    getSkill(){
      this.skillService.getUser().subscribe(data => {
  this.skillList = data;
  console.log(this.skillList);
    },
    err=> console.log(err))
  }
  getCurrentEmployeeData(){
    this.sharedService.currentData.subscribe(data =>{
  this.profileDetail = data;
  console.log(this.profileDetail);
  this.employeeService.getEmployee().subscribe(data =>{
  this.getdetail=data;
  for(let i = 0 ; i<this.getdetail.length;i++ ){
    if(this.getdetail[i].employee_id == this.profileDetail._id){
      this.currentemployee[0]=this.getdetail[i];
    }
  }
  console.log(this.currentemployee);
  })
    })
  }
  
    editEmployees(){
      this.profileForm.value._id= this.currentemployee[0]._id;
     
      this.employeeService.updateEmployee(this.profileForm.value).subscribe(data=>{
        this._snackBar.open('Updated', 'Successfully', {
          duration: 2000,
        });
        console.log(data);
      },
     err=>console.log(err)) ; 
   console.log(this.profileForm.value);
    }



}
