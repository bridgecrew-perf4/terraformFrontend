import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AzureAuthenticationComponent} from './azure-authentication/azure-authentication.component';
import {OtherInformationComponent} from './other-information/other-information.component';
import {AuthGuardService} from '../services/authGuard.service';
import {SignupComponent} from './signup/signup.component';
import {AzureDeploymentComponent} from './azure-deployment/azure-deployment.component';
import {WordpressAuthenticationComponent} from './wordpress-authentication/wordpress-authentication.component';
import {WordpressOtherInformationComponent} from './wordpress-other-information/wordpress-other-information.component';
import {AzureLoginComponent} from './azure-login/azure-login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'azure/deploy', component: AzureDeploymentComponent, canActivate: [AuthGuardService]},
  // {path: 'azure/wordpressauth', component: WordpressAuthenticationComponent, canActivate: [AuthGuardService]},
  {path: 'azure/wordpresssecond', component: WordpressOtherInformationComponent, canActivate: [AuthGuardService]},
  // {path: 'azure/auth', component: AzureAuthenticationComponent, canActivate: [AuthGuardService]},
  {path: 'azure/second', component: OtherInformationComponent, canActivate: [AuthGuardService]},
  {path: 'azure/azurecli', component: AzureLoginComponent, canActivate: [AuthGuardService]},
  {path: 'azureadmin', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
