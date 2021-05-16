import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application, ApplicationPaginate } from './application';

const BaseUrl = 'http://localhost:3000/api/application'
@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) { }
  createApplication(model):Observable<Application>{
      return this.http.post<Application>(`${BaseUrl}`,model);
     
   }
   getallApplication():Observable<Application[]>{
    return this.http.get<Application[]>(`${BaseUrl}`)
}
   getApplication(id):Observable<ApplicationPaginate[]>{
       return this.http.get<ApplicationPaginate[]>('http://localhost:3000/api/application/'+id)
   }
   getmatchApplication(req_id,employee_id):Observable<Application[]>{
    return this.http.get<Application[]>('http://localhost:3000/api/application/'+req_id+'/'+employee_id)
}

}
