import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  login(){
    if(sessionStorage.getItem('login') != null){
      return true;
    }
    else{
      this.router.navigate([''])
      return false;
    }

  }

  loggedIn(){
    if(sessionStorage.getItem('login') != null){
      this.router.navigate(['/list']);
      return false;
    }
    else{
      return true;
    }

  }

  constructor(private router: Router) { }
}
