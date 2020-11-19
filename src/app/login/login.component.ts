import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../dto/User';
import {fromEvent, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {SharedService} from '../../services/shared.service';
import {SnackBarService} from '../../services/snackBar.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  user: User = new User();
  @ViewChild('password', {static: false}) passwordField: ElementRef;
  subscription: Subscription = new Subscription();

  constructor(private userService: UserService, public sharedService: SharedService, public router: Router,
              private snackBar: SnackBarService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loginClickHandler();
  }

  loginClickHandler() {
    // this.subscription.add(fromEvent(document.querySelector('#eyeIcon'), 'click').subscribe(x => {
    //   this.setPasswordFieldType();
    // }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setPasswordFieldType() {
    if (this.passwordField.nativeElement.type === 'text') {
      this.passwordField.nativeElement.type = 'password';
    } else {
      this.passwordField.nativeElement.type = 'text';
    }
  }

  login(signUpForm: NgForm) {
    this.userService.loginUser(signUpForm.value).subscribe((result: any) => {
      console.log(result);
      if (result.status == 200) {
        this.sharedService.isLoggedIn = true;
        this.router.navigateByUrl('/azure/auth');
      } else {
        this.snackBar.openSnackBar(result.message, result.status);
      }
    }, error => {
    }, () => {
    });
  }
}
