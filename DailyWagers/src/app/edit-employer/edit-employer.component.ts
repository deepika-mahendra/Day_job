import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployerService } from '../add-employer/employer.service';
import { Observable } from 'rxjs';
import { Employee } from '../add-employee/employee';
import { Employer } from '../add-employer/employer';
import { SharedService } from '../employer-list/shared.service';




@Component({
  selector: 'app-edit-employer',
  templateUrl: './edit-employer.component.html',
  styleUrls: ['./edit-employer.component.scss']
})
export class EditEmployerComponent implements OnInit {
  employerDetail: any;
getdetail = [];
currentemployer = [];
  constructor(private fb:FormBuilder,  private _snackBar: MatSnackBar,private employerService:EmployerService,
    private sharedService:SharedService,) { }
  
  createEmployerForm:FormGroup;
  ngOnInit(): void {
    this.createform();
    this.getCurrentEmployerData();
   
  }
  createform(){
    this.createEmployerForm =this.fb.group({
      name:['',Validators.required],
      location:['',Validators.required],
      contact:['',Validators.required],
      alternate:['',Validators.required],
      Office_email:['',Validators.required],
      type:['',Validators.required],
      point_of_contact:['',Validators.required],
      isActive:['',Validators.required]
      
    })
  }

getCurrentEmployerData(){
  this.sharedService.currentData.subscribe(data =>{
this.employerDetail = data;
console.log(this.employerDetail);
this.employerService.getEmployer().subscribe(data =>{
this.getdetail=data;
for(let i = 0 ; i<this.getdetail.length;i++ ){
  if(this.getdetail[i]._id == this.employerDetail){
    this.currentemployer[0]=this.getdetail[i];
  }
}
console.log(this.currentemployer);
})
  })
}

  editEmployers(){
    this.createEmployerForm.value._id= this.currentemployer[0]._id;
   
    this.employerService.updateEmployer(this.createEmployerForm.value).subscribe(data=>{
      this._snackBar.open('Updated', 'Successfully', {
        duration: 2000,
      });
      console.log(data);
    },
   err=>console.log(err)) ; 
 console.log(this.createEmployerForm.value);
  }
}
