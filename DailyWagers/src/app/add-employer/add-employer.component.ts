import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployerService } from './employer.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-employer',
  templateUrl: './add-employer.component.html',
  styleUrls: ['./add-employer.component.scss']
})
export class AddEmployerComponent implements OnInit {

  constructor(private fb:FormBuilder,  private _snackBar: MatSnackBar,private employerService:EmployerService,) { }

  createEmployerForm:FormGroup;
  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.createEmployerForm =this.fb.group({
      name:['',Validators.required],
      location:['',Validators.required],
      contact:['',Validators.required],
      alternate:['',Validators.required],
      Office_email:['',Validators.required],
      type:['',Validators.required],
      point_of_contact:['',Validators.required],
      isActive:['']
    })
  }
  addEmployers(){
this.createEmployerForm.value.isActive="true";
    this.employerService.createEmployer( this.createEmployerForm.value).subscribe(data=>{
      this._snackBar.open('Workrequirement Added', 'Successfully', {
        duration: 2000,
      });
      console.log(data);
    },
   err=>console.log(err)) ; 
  }

}
