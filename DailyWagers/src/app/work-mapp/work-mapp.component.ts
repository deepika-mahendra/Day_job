import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from '../add-employee/employee.service';
import { WorkreqService } from '../add-workrequirement/workreq.service';

@Component({
  selector: 'app-work-mapp',
  templateUrl: './work-mapp.component.html',
  styleUrls: ['./work-mapp.component.scss']
})
export class WorkMappComponent implements OnInit {

  constructor( private fb:FormBuilder,
    private _snackBar: MatSnackBar,
    private employeeService:EmployeeService,
    private workreqService:WorkreqService,) { }

  createWorkmapForm:FormGroup;
  employeeList:any=[];
  workreqList:any=[];
  ngOnInit(): void {
  }
  createForm(){
    this.createWorkmapForm =this.fb.group({
      reqname:['' ,Validators.required],
      employeename:['',Validators.required]
    
    })
  }
  
  getEmployees(){
    this.employeeService.getEmployee().subscribe(data => {
  this.employeeList = data;
  console.log(this.employeeList);
    },
    err=> console.log(err))
  }
  getworks(){
    this.workreqService.getWorkreq().subscribe(data => {
  this.workreqList = data;
  console.log(this.workreqList);
    },
    err=> console.log(err))
  }


}
