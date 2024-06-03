import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { routes } from '../app.routes';

export const userAuthenticationGuard: CanActivateFn = (route, state) => {
  return inject(AuthenticationService).login();
};

export const userAlreadyLoggedIn: CanActivateFn = (route, state) =>{
  return inject(AuthenticationService).loggedIn();
}
