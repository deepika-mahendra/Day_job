import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../add-employee/employee.service';
import { Employee } from '../add-employee/employee';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';
import { SkillService } from '../add-workrequirement/skill.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  skillList:any=[];
  employeeList : Employee[];
  
  constructor(private employeeService : EmployeeService,
    private sharedService: SharedService, private skillService:SkillService, private router :Router) { }
  displayedColumns =
  ['actions','name','city','contact','email','experience','skill_req','gender','isActive'];
dataSource = [];
  ngOnInit(): void {
    
    this. getEmployeeList();
  
  }
 
  getEmployeeList(){
    this.employeeService.getEmployee().subscribe(res=>{
      this.employeeList=res;
      
      this.dataSource = this.employeeList;
      console.log(this.employeeList)
    })
  }

  update(item){
    console.log(item);
    this.sharedService.updateMessage(item._id);
    this.router.navigate(['admin/Edit-Employee']);
  }
  

}
