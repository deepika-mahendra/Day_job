import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkMap, WorkPaginate } from './workMap';

@Injectable({
  providedIn: 'root'
})
export class WorkmappingService {
  constructor(private http: HttpClient) { }
  createWorkmap(model):Observable<WorkMap>{
      return this.http.post<WorkMap>('http://localhost:3000/api/workmap',model);
      
     
   }
   getallWorkmap():Observable<WorkMap[]>{
    return this.http.get<WorkMap[]>('http://localhost:3000/api/workmap')
}
   getWorkmap(id):Observable<WorkPaginate[]>{
    return this.http.get<WorkPaginate[]>('http://localhost:3000/api/workmap/'+id);
    }
    updateWorkMap(id,model):Observable<WorkMap>{
      return this.http.put<WorkMap>('http://localhost:3000/api/workmap/'+id,model);
     
   }
}
