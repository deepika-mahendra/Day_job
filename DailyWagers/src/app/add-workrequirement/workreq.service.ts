import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkReq } from './skill';

@Injectable({
  providedIn: 'root'
})
export class WorkreqService {
  constructor(private http: HttpClient) { }
  createWorkreq(model):Observable<WorkReq>{
      return this.http.post<WorkReq>('http://localhost:3000/api/req',model);
     
   }
   getWorkreq():Observable<WorkReq[]>{
    return this.http.get<WorkReq[]>('http://localhost:3000/api/req');
    }
    updateEmployer(model):Observable<WorkReq>{
      return this.http.put<WorkReq>('http://localhost:3000/api/req/'+ model._id,model);
   }

}
