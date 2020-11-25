import { Component } from '@angular/core';
import {LoadingBarService} from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aem';
  disableBackgroundIndicator: boolean = false;

  constructor(public loadingBarService: LoadingBarService
  ) {
    this.loadingBarService.progress$.forEach((value) => {
      if (value == 0 || value == 100) {
        this.disableBackgroundIndicator = false;
      } else {
        this.disableBackgroundIndicator = true;
      }
    });
  }
}
