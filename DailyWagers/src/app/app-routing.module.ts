import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ViewRequirementsComponent } from './view-requirements/view-requirements.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewWorkHistoryComponent } from './view-work-history/view-work-history.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { AddEmployerComponent } from './add-employer/add-employer.component';
import { AddWorkrequirementComponent } from './add-workrequirement/add-workrequirement.component';
import { WorkrequirementListComponent } from './workrequirement-list/workrequirement-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { pathToFileURL } from 'url';

import { AdmincardsComponent } from './admincards/admincards.component';
import { WorkMappComponent } from './work-mapp/work-mapp.component';
import { EditEmployerComponent } from './edit-employer/edit-employer.component';
import { EditworkComponent } from './editwork/editwork.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AssignworkComponent } from './assignwork/assignwork.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';


const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'admin',component:AdminDashboardComponent,
  children: [
    {
      path:  'home',
      component:  AdmincardsComponent,
      },
    {
    path:  'Add-Employee',
    component:  AddEmployeeComponent,
    },
    {
    path:  'Employee-list',
    component:  EmployeeListComponent,
    },
    {
    path:  'Employer-list',
    component:   EmployerListComponent
    },
       {
    path:  'Add-Employer',
    component:  AddEmployerComponent
    },
    {
    path:  'Add-WorkReq',
    component:  AddWorkrequirementComponent
    },
    {
    path:  'WorkReq-List',
    component:  WorkrequirementListComponent
    },
    {
      path:  'Edit-Work',
      component:  EditworkComponent
      },
      {
        path:  'Edit-Employee',
        component:  EditEmployeeComponent
        },
    {
      path:  'Edit-Employer',
      component:  EditEmployerComponent
      },
      
    
    {
      path:  'WorkMap',
      component:  WorkMappComponent
      }

    ]
  
},
  {path:'login',component:LoginComponent},
  {
    path:  'register',
    component:  ViewProfileComponent
    },
  {path:'user',component:UserdashboardComponent,
  children: [
    {
      path:  'Assignedwork',
      component: AssignworkComponent
      }, 

    {
    path:  'requirement',
    component: ViewRequirementsComponent
    },
    
    {
      path:  'Edit-Profile',
      component:  EditProfileComponent
      },
    {
    path:  'history',
    component:  ViewWorkHistoryComponent
    }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
