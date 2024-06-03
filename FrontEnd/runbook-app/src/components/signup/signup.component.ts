import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  constructor(private router: Router, private httpService: HttpService){}

  signupForm = new FormGroup({
    username: new FormControl('', {nonNullable:true, validators: Validators.required}),
    password: new FormControl('', {nonNullable:true, validators: Validators.required}),
    confirmPassword: new FormControl('', {nonNullable:true, validators: Validators.required})
  })
  redirectToLogin(){
    this.router.navigate(['']);
  }

  onSubmit(){
      let username: String = this.signupForm.value.username!;
      let password: String = this.signupForm.value.password!;
      let confirmPassword: String = this.signupForm.value.confirmPassword!;
    if(password != confirmPassword){
      alert('Passwords do not match');
    }
    else{
      this.httpService.createLogin(username,password).subscribe(res =>{
        alert(res);
      });
    }
    this.signupForm.reset();
  }
}
