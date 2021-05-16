import { Injectable } from '@angular/core';
import {User} from './login'
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
const BaseUrl = 'http://localhost:3000/api/user'
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) { }
  getUser():Observable<User[]>{
    return this.http.get<User[]>(`${BaseUrl}`);
    }
    createUser(model):Observable<User>{
      return this.http.post<User>(`${BaseUrl}/signup`,model);
     
   }
   loginUser(model):Observable<User>{
    return this.http.post<User>(`${BaseUrl}/login`,model);
   
 }
}
