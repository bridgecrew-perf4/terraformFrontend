import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {SharedService} from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public sharedService: SharedService, public router: Router) {}
  canActivate(): boolean {
    if (!this.sharedService.isLoggedIn) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
