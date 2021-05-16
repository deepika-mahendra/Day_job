import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skills } from './skill';


@Injectable({
  providedIn: 'root'
})
export class SkillService {
  constructor(private http: HttpClient) { }
  getUser():Observable<Skills>{
    return this.http.get<Skills>('http://localhost:3000/api/skills');
    }
}
