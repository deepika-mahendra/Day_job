import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav'; import { from } from 'rxjs';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HeaderComponent } from './header/header.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewRequirementsComponent } from './view-requirements/view-requirements.component';
import { ViewWorkHistoryComponent } from './view-work-history/view-work-history.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { AddEmployerComponent } from './add-employer/add-employer.component';
import { AddWorkrequirementComponent } from './add-workrequirement/add-workrequirement.component';
import { WorkrequirementListComponent } from './workrequirement-list/workrequirement-list.component';

import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AdmincardsComponent } from './admincards/admincards.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { WorkMappComponent } from './work-mapp/work-mapp.component';
import { SharedService } from './login/shared.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditEmployerComponent } from './edit-employer/edit-employer.component';
import { EditworkComponent } from './editwork/editwork.component';
import { AssignworkComponent } from './assignwork/assignwork.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';


@NgModule({
  
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    LoginComponent,
    UserdashboardComponent,
    HeaderComponent,
    ViewProfileComponent,
    ViewRequirementsComponent,
    ViewWorkHistoryComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    EmployerListComponent,
    AddEmployerComponent,
    AddWorkrequirementComponent,
    WorkrequirementListComponent,
   
    AdmincardsComponent,
    WorkMappComponent,
    EditProfileComponent,
    EditEmployerComponent,
    EditworkComponent,
    AssignworkComponent,
    EditEmployeeComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule

   
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
