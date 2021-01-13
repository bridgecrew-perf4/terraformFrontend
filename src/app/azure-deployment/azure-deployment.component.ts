import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../services/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-azure-deployment',
  templateUrl: './azure-deployment.component.html'
})
export class AzureDeploymentComponent implements OnInit {

  constructor(public router: Router,) {
  }

  ngOnInit(): void {
  }

  goWordpress() {
    this.router.navigateByUrl('/azure/wordpresssecond');
  }
  goAEM() {
    this.router.navigateByUrl('/azure/second');
  }
}
