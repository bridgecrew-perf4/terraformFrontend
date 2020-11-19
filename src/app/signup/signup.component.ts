import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {fromEvent, Subscription} from 'rxjs';
import {User} from '../../dto/User';
import {Router} from '@angular/router';
import {SnackBarService} from '../../services/snackBar.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit, AfterViewInit, OnDestroy {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  user: User = new User();
  @ViewChild('password', {static: false}) passwordField: ElementRef;
  subscription: Subscription = new Subscription();

  constructor(private userService: UserService, public router: Router, private snackBar: SnackBarService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loginClickHandler();
  }

  loginClickHandler() {
    this.subscription.add(fromEvent(document.querySelector('#eyeIcon'), 'click').subscribe(x => {
      this.setPasswordFieldType();
    }));
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

  signUp() {
    this.userService.registerUser(this.user).subscribe((result: any) => {
      console.log(result);
      if (result.status == 200) {
        this.router.navigateByUrl('/');
      } else if (result.message.err.code === 11000) {
        this.snackBar.openSnackBar('Email is already registered!', result.status);
      }
    });
  }
}
