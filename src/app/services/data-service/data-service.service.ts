import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {
  private messageSource = new Subject<Object>();
  constructor() { }

  public getMessage(): Observable<Object> {
    return this.messageSource.asObservable();
  }

  public setMessage(message: Object){
    return this.messageSource.next(message);
  }
}
