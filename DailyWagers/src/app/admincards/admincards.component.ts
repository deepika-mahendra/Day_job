import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../add-employee/employee.service';
import { EmployerService } from '../add-employer/employer.service';
import { WorkreqService } from '../add-workrequirement/workreq.service';

@Component({
  selector: 'app-admincards',
  templateUrl: './admincards.component.html',
  styleUrls: ['./admincards.component.scss']
})
export class AdmincardsComponent implements OnInit {
  employeeCount: any=[];
  employerCount: any=[];
  workreqCount: any=[];
  constructor( private employeeService :EmployeeService,
   private employerService :EmployerService,
  private workreqService: WorkreqService) { }

  ngOnInit(): void {
    this.getemployeecount();
    this.addEmployerscount();
    this.getWorkcount();
  }
  getemployeecount(){
    this.employeeService.getEmployee().subscribe(data => {
  this.employeeCount = data.length;
  console.log(this.employeeCount);
    },
    err=> console.log(err))
  }
  addEmployerscount(){
    this.employerService.getEmployer().subscribe(data=>{
      this.employerCount = data.length
      console.log(data);
    },
   err=>console.log(err)) ; 
  }
  getWorkcount(){
    this.workreqService.getWorkreq().subscribe(data => {
  this.workreqCount = data.length
  console.log(this.workreqCount);
    },
    err=> console.log(err))
  }

}
