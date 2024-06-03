import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CommonModule } from '@angular/common';
import { Alert } from '../../model/alert';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,FormsModule,NavigationComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent{
  title = 'runbook-app';
  filter: string = "";
  alerts: Alert[] = [];
  filteredAlerts: Alert[] = [];
  private editedAlert = {};

  constructor(private httpService: HttpService, private dataService: DataService, private router: Router){
    this.dataService.getEditedAlert.subscribe(data => {
      this.editedAlert = data;
    })
  }
 
  get _filter(){
    return this.filter;
  }
  set _filter(filter : string){
    this.filter = filter
    this.filteredAlerts = this.filterByAlertCode(this.filter);
  }

  ngOnInit(){
    this.getAlerts();
  }

  filterByAlertCode(filter: string){
    return this.alerts.filter((alert) =>{
      return alert.col1.toLowerCase().includes(filter.toLowerCase());
    })
  }

  deleteAlert(alert: Alert){
    const alertId = alert._id.toString();
    this.httpService.deleteAlert(alertId).subscribe(res =>{
      this.getAlerts();
    });
    
  }

  updateAlert(alertToBeEdited: Alert){
    this.dataService.setEditedAlert(alertToBeEdited);
    this.router.navigate(['/edit'])
  }

  getAlerts(){
    this.httpService.getAlerts().subscribe(res =>{
      this.alerts = res;
      this.filteredAlerts = this.alerts;
    });
  }
}
