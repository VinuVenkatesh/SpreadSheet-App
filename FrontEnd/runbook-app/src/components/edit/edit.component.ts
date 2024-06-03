import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Alert } from '../../model/alert';
import { Router } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FormsModule,NavigationComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  private alert = {};
  private id: String = "";

  constructor(private httpService: HttpService, private dataService: DataService, private router: Router){
    this.dataService.getEditedAlert.subscribe(data =>{
      this.alert = data;
      this.id = data._id;
      this.alertForm.controls['col1'].setValue(data.col1);
      this.alertForm.controls['col1'].disable();
      this.alertForm.controls['col2'].setValue(data.col2);
      this.alertForm.controls['col3'].setValue(data.col3);
      this.alertForm.controls['col4'].setValue(data.col4);
      this.alertForm.controls['col5'].setValue(data.col5);
      this.alertForm.controls['col6'].setValue(data.col6);
      this.alertForm.controls['col7'].setValue(data.col7);
      this.alertForm.controls['col8'].setValue(data.col8);
      this.alertForm.controls['col9'].setValue(data.col9);
      this.alertForm.controls['col10'].setValue(data.col10);
      this.alertForm.controls['col11'].setValue(data.col11);
      this.alertForm.controls['col12'].setValue(data.col12);
      this.alertForm.controls['col13'].setValue(data.col13);
      this.alertForm.controls['col14'].setValue(data.col14);
      this.alertForm.controls['col15'].setValue(data.col15);
      this.alertForm.controls['col16'].setValue(data.col16);
      this.alertForm.controls['col17'].setValue(data.col17);
      this.alertForm.controls['col18'].setValue(data.col18);
      this.alertForm.controls['col19'].setValue(data.col19);
      this.alertForm.controls['col20'].setValue(data.col20);
      this.alertForm.controls['col21'].setValue(data.col21);
    })
  }
  alertForm = new FormGroup({
    col1 : new FormControl('',{nonNullable:true,validators: Validators.required}),
    col2 : new FormControl('',{nonNullable: true}),
    col3 : new FormControl('',{nonNullable:true}),
    col4 : new FormControl('',{nonNullable:true}),
    col5 : new FormControl('',{nonNullable:true}),
    col6 : new FormControl('',{nonNullable:true}),
    col7 : new FormControl('',{nonNullable:true}),
    col8 : new FormControl('',{nonNullable:true}),
    col9 : new FormControl('',{nonNullable:true}),
    col10 : new FormControl('',{nonNullable:true}),
    col11 : new FormControl('',{nonNullable:true}),
    col12 : new FormControl('',{nonNullable:true}),
    col13 : new FormControl('',{nonNullable:true}),
    col14 : new FormControl('',{nonNullable:true}),
    col15 : new FormControl('',{nonNullable:true}),
    col16 : new FormControl('',{nonNullable:true}),
    col17 : new FormControl('',{nonNullable:true}),
    col18 : new FormControl('',{nonNullable:true}),
    col19 : new FormControl('',{nonNullable:true}),
    col20 : new FormControl('',{nonNullable:true}),
    col21 : new FormControl('',{nonNullable:true})
  });

  onSubmit(){
    this.httpService.updateAlert(this.id,this.alertForm.value as Alert).subscribe(res =>{
      console.log(res);
      this.router.navigate(['']);
    });
  }
}
