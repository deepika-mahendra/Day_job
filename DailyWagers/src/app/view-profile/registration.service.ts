import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from './registration';
const BaseUrl = 'http://localhost:3000/api/employee'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }
  getEmployee():Observable<Registration[]>{
    return this.http.get<Registration[]>(`${BaseUrl}`);
    }
    createEmployee(model):Observable<Registration>{
      return this.http.post<Registration>(`${BaseUrl}`,model);
   }
   editEmployee(model):Observable<Registration>{
    return this.http.put<Registration>(`${BaseUrl}`,model);
 }
}
