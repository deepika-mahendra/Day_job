import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private userData = new BehaviorSubject('');
  currentData = this.userData.asObservable();
  constructor() { }
  updateMessage(item:any){
    this.userData.next(item);
  }


}

