import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatNativeDateModule} from '@angular/material/core';
import { AzureAuthenticationComponent } from './azure-authentication/azure-authentication.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { OtherInformationComponent } from './other-information/other-information.component';
import { HeaderComponent } from './header/header.component';
import {SignupComponent} from './signup/signup.component';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {LoadingBarModule} from '@ngx-loading-bar/core';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, AzureAuthenticationComponent, FooterComponent, OtherInformationComponent, HeaderComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, BrowserAnimationsModule, MatInputModule,
    MatCheckboxModule, MatRadioModule, MatSelectModule, MatDatepickerModule, MatTabsModule, MatMenuModule,
    MatIconModule, MatDialogModule, MatSidenavModule, MatSnackBarModule, MatExpansionModule, MatButtonModule,
    MatToolbarModule, MatListModule, MatStepperModule, MatTableModule, MatCardModule, MatDatepickerModule,
    MatNativeDateModule, AppRoutingModule, LoadingBarHttpClientModule, LoadingBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
