import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alert } from '../model/alert';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  list: Alert[] =[];
  private url = 'http://localhost:5000/'
  constructor(private http: HttpClient) { }

  getAlerts() : Observable<Alert[]>{
    return this.http.get<Alert[]>(this.url.concat("list"));
  }

  postAlerts(alert : Alert){
    return this.http.post<Alert>(this.url.concat("add"),alert);
  }

  deleteAlert(alertId: String){
    return this.http.delete<String>(this.url.concat("delete/"+alertId));
  }

  updateAlert(alertId: String, alert: Alert){
    return this.http.put<Alert>(this.url.concat("update/"+alertId),alert);
  }

  checkLogin(username: String, password: String){
    return this.http.get<String>(this.url.concat("checkLogin/"+username+"/"+password));
  }
  createLogin(username: String, password: String){
    return this.http.post<String>(this.url.concat("createLogin"),{username,password});
  }
}