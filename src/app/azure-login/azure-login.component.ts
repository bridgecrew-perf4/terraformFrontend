import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {AzureAuth} from '../../dto/AzureAuth';

@Component({
  selector: 'app-azure-login',
  templateUrl: './azure-login.component.html'
})
export class AzureLoginComponent implements OnInit {

  constructor(public router: Router, public authService: AuthService) {
  }

  message;
  code: string;
  subscriptionInd: boolean = false;
  radioSelected: string;
  subscriptions: AzureAuth[] = [];
  selectedSubs: string;

  ngOnInit(): void {
    this.authService.cliLogin().subscribe((result: any) => {
      console.log(result);
      if (result.status == 200) {
        this.message =  result.message.split(' ')
        console.log(this.message[16])
        this.code = this.message[16]
        // this.sharedService.isLoggedIn = true;
        // this.router.navigateByUrl('/azure/azurecli');
      } else {
        // this.snackBar.openSnackBar(result.message, result.status);
      }
    });
  }

  getSubscription() {
    this.authService.getSubscription().subscribe((result: any) => {
      this.subscriptions = result;
      console.log(this.subscriptions);
      // this.router.navigateByUrl('/azure/azurecli');
    }, error => {
    }, () => {
      this.subscriptionInd = true;
    });
  }

  onItemChange(item) {
    this.selectedSubs = item;
  }

  setSubscription() {
    console.log(this.selectedSubs);
    this.authService.setSubscription(this.selectedSubs).subscribe((result: any) => {
      if (result.status == 200) {
        this.router.navigateByUrl('/azure/deploy');
      }
      console.log(result);
    });
  }
}
