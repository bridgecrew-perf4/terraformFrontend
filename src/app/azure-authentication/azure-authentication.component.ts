import {Component, OnInit} from '@angular/core';
import {Authentication} from '../../dto/Authentication';
import {AzureTerraformService} from '../../services/azureTerraform.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-azure-authentication',
  templateUrl: './azure-authentication.component.html'
})
export class AzureAuthenticationComponent implements OnInit {

  authentication: Authentication = new Authentication();

  constructor(private azureTerraformService: AzureTerraformService, public router: Router) {
  }

  ngOnInit(): void {
  }

  postAzureAuth() {
    // this.ec2.templateType = 'TF'
    this.azureTerraformService.postAzureAuth(this.authentication).subscribe((result: any) => {
      if (result.status == 200) {
        this.router.navigateByUrl('/azure/second');
      }
      console.log(result);
    });
  }

  clear() {
    this.authentication.clientSecret = ''
    this.authentication.tenantID = ''
    this.authentication.clientID = ''
    this.authentication.subscriptionID = ''
  }
}
