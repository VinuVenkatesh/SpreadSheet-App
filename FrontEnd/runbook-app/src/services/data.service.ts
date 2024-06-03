import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Alert } from '../model/alert';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private editedAlert = new BehaviorSubject<Alert>({} as any);

  getEditedAlert = this.editedAlert.asObservable();

  setEditedAlert(alert : Alert){
    this.editedAlert.next(alert);
  }


  constructor() { }
}
