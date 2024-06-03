import { Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { userAlreadyLoggedIn, userAuthenticationGuard } from './guards/user-authentication.guard';

export const routes: Routes = [
    {'path': 'list', component:ListComponent, canActivate:[userAuthenticationGuard]},
    {'path': 'add', component:AddComponent,canActivate:[userAuthenticationGuard]},
    {'path': 'edit', component:EditComponent,canActivate:[userAuthenticationGuard]},
    {'path': '', component:LoginComponent, canActivate:[userAlreadyLoggedIn]},
    {'path': 'signup', component:SignupComponent},
    {'path': '**', component:LoginComponent, canActivate:[userAlreadyLoggedIn]}
];
