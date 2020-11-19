import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AzureAuthenticationComponent} from './azure-authentication/azure-authentication.component';
import {OtherInformationComponent} from './other-information/other-information.component';
import {AuthGuardService} from '../services/authGuard.service';
import {SignupComponent} from './signup/signup.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'azure/auth', component: AzureAuthenticationComponent, canActivate: [AuthGuardService]},
  {path: 'azure/second', component: OtherInformationComponent, canActivate: [AuthGuardService]},
  {path: 'azureadmin', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
