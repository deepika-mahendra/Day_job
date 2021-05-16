import { Component, OnInit } from '@angular/core';
import { WorkreqService } from '../add-workrequirement/workreq.service';
import { WorkReq } from '../add-workrequirement/skill';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workrequirement-list',
  templateUrl: './workrequirement-list.component.html',
  styleUrls: ['./workrequirement-list.component.scss']
})
export class WorkrequirementListComponent implements OnInit {

  workreqList : WorkReq[];
  constructor(private workreqService : WorkreqService,
    private sharedService: SharedService, private router :Router) { }
  displayedColumns: string[] = ['actions','title','employer','location','skill_req','worker_req','duration','payment','start_dt','end_dt','isActive'];
  dataSource = [];

  ngOnInit(): void {
    this.getworkList();
  }
  getworkList(){
    this.workreqService.getWorkreq().subscribe(res=>{
      this.workreqList=res;
      
      this.dataSource = this.workreqList;
      console.log(this.workreqList)
    })
  }
  update(item){
    console.log(item);
    this.sharedService.updateMessage(item._id);
    this.router.navigate(['admin/Edit-Work']);
  }

}
