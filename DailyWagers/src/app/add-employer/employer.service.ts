import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employer } from './employer';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(private http: HttpClient) { }
  getEmployer():Observable<Employer[]>{
    return this.http.get<Employer[]>('http://localhost:3000/api/employer');
    }
    createEmployer(model):Observable<Employer>{
      return this.http.post<Employer>('http://localhost:3000/api/employer',model);
   }
   updateEmployer(model):Observable<Employer>{
    return this.http.put<Employer>('http://localhost:3000/api/employer/'+ model._id,model);
 }
}
