import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule,FormControl,FormGroup,Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { Login } from '../../model/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private httpService: HttpService, private router: Router){

  }
  loginForm = new FormGroup({
    username: new FormControl('', {nonNullable:true,validators: Validators.required}),
    password: new FormControl('',{nonNullable:true,validators: Validators.required})
  })


  onSubmit(){
    let loginCredentials: Login = this.loginForm.value as Login;
    this.httpService.checkLogin(loginCredentials.username, loginCredentials.password).subscribe(res =>{
      if(res == "200"){
        alert('Logged in');
        sessionStorage.setItem('login','true');
        this.router.navigate(['/list']);
      }
      else{
        alert('Incorrect username or password');
      }
      this.loginForm.reset();
    })
  }

  userSignup(){
    this.router.navigate(['/signup']);
    
  }
  
}
