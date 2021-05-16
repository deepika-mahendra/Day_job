import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators,ReactiveFormsModule} from '@angular/forms'

import {MatSnackBar} from '@angular/material/snack-bar';

import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';
import { SharedService } from './shared.service';
import { config, BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  signupForm:FormGroup;
  loginForm:FormGroup;

  
  constructor(private fb:FormBuilder ,
     private _snackBar: MatSnackBar,
     private  loginService:LoginService,
     private sharedService:SharedService,
     private router :Router,
     private http: HttpClient) {
   
      }

  ngOnInit(): void {
     this.createSignupForm();
     this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }
  createSignupForm(){
    this.signupForm = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      // confirmPassword:['',Validators.required],
      contact:['',Validators.required],
      // role:['',Validators.required]
    })
  }
  signup(){
    this.loginForm.value.role="user";
    this.loginService.createUser( this.signupForm.value).subscribe(data=>{
      this._snackBar.open('signup Successful', 'Success', {
        duration: 2000,
      });
      this.sharedService.updateMessage(data);
      this.router.navigate(['register']);
      console.log(data);
  
    },
   err=>console.log(err)) ; 
  }
  
  login(){
    
    this.loginService.loginUser( this.loginForm.value).subscribe(data=>{
      this._snackBar.open('login Successful', 'Success', {
        duration: 2000,
      });
      
      if(data.role=='admin'){
        this.sharedService.updateMessage(data);
        this.router.navigate(['admin/home']);
      }
      else{
        this.sharedService.updateMessage(data);
        this.router.navigate(['user/Assignedwork']);
      }
      console.log(data);
  
    },
   err=>console.log(err)) ; 
   }

  }



  


   
   


