import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormControl,FormGroup, Validators} from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { Alert } from '../../model/alert';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,NavigationComponent],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {

  constructor(private httpService: HttpService){

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
    let newAlert: Alert = this.alertForm.value as Alert;
    this.httpService.postAlerts(newAlert).subscribe(res =>{
      console.log(res);
      this.alertForm.reset();
    })
  }
}
