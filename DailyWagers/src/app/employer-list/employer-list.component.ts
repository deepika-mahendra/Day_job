import { Component, OnInit } from '@angular/core';
import { Employer } from '../add-employer/employer';
import { EmployerService } from '../add-employer/employer.service';
import { SharedService } from './shared.service';
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.scss']
})
export class EmployerListComponent implements OnInit {
  employerList : Employer[];
  constructor(private employerService : EmployerService,private sharedService: SharedService, private router :Router) { }
  displayedColumns: string[] = ['actions','name','location','contact','alternate','Office_email','type','point_of_contact','isActive'];
  dataSource = [];
  ngOnInit(): void {
    this. getEmployeeList();
  }
  getEmployeeList(){
    this.employerService.getEmployer().subscribe(res=>{
      this.employerList=res;
      
      this.dataSource = this.employerList;
      console.log(this.employerList)
    })
  }
  update(item){
    console.log(item);
    this.sharedService.updateMessage(item._id);
    this.router.navigate(['admin/Edit-Employer']);
  }
}
