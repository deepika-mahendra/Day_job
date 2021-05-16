import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  getEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:3000/api/employee');
    }
    createEmployee(model):Observable<Employee>{
      return this.http.post<Employee>('http://localhost:3000/api/employee',model);
     
   }
   updateEmployee(model):Observable<Employee>{
    return this.http.put<Employee>('http://localhost:3000/api/employee/'+model._id,model);
   
 }
}
