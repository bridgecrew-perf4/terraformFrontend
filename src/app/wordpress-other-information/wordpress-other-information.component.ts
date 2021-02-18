import {Component, OnInit} from '@angular/core';
import {SecondScreen} from '../../dto/SecondScreen';
import {AzureTerraformService} from '../../services/azureTerraform.service';
import {Router} from '@angular/router';
import {SnackBarService} from '../../services/snackBar.service';

@Component({
  selector: 'app-other-information',
  templateUrl: './wordpress-other-information.component.html'
})
export class WordpressOtherInformationComponent implements OnInit {

  ss: SecondScreen = new SecondScreen();
  rgLocData = [{code: 'Central US', label: 'Central US'}, {code: 'UAE Central', label: 'UAE Central'},
    {code: 'UAE North', label: 'UAE North'}, {code: 'East US', label: 'East US'}];
  instTypeData = [
    {code: 'Standard_B2s', label: 'B2S (2CPU, 4GB Ram)'}, {code: 'Standard_B2ms', label: 'B2MS (2CPU, 8GB Ram)'},
    {code: 'Standard_B4ms', label: 'B4MS (4CPU, 16GB Ram)'}, {code: 'Standard_D2_v2', label: 'D2 v2 (2CPU, 7GB Ram)'},
    {code: 'Standard_D3_v2', label: 'D3 v2 (4CPU,14GB Ram)'}];
  dbEditionData = [{code: 'Basic', label: 'Basic'}, {code: 'Standard', label: 'Standard'},
    {code: 'Premium', label: 'Premium'}, {code: 'DataWarehouse', label: 'DataWarehouse'}, {code: 'Business', label: 'Business'},
    {code: 'BusinessCritical', label: 'BusinessCritical'}, {code: 'Free', label: 'Free'}, {code: 'GeneralPurpose', label: 'GeneralPurpose'},
    {code: 'Hyperscale', label: 'Hyperscale'}, {code: 'PremiumRS', label: 'PremiumRS'}, {code: 'Standard', label: 'Standard'},
    {code: 'Stretch', label: 'Stretch'}, {code: 'System', label: 'System'}, {code: 'System2 ', label: 'System2'},
    {code: 'Web ', label: 'Web'}];
  dbCollationData = [{code: 'SQL_Latin1_General_CP1_CI_AS', label: 'SQL_Latin1_General_CP1_CI_AS '}];
  dbVersionData = [{code: '12', label: '12'}];
  accountTier = [{code: 'Standard', label: 'Standard '}];
  storageAccountReplicationType = [{code: 'GRS', label: 'GRS'}];
  serviceObjectiveName = [{code: 'Basic', label: 'Basic'}];

  constructor(private azureTerraformService: AzureTerraformService, private snackBar: SnackBarService) {
  }

  ngOnInit(): void {
  }

  postAzureSecond() {
    this.ss.type = 'WP';
    this.azureTerraformService.postAzureSecond(this.ss).subscribe((result) => {
      console.log('File is saved');
    });
  }

  postDeploy() {
    this.azureTerraformService.postDeploy('WP').subscribe((result: any) => {
      console.log(result);
      if (result.status == 200) {
        this.snackBar.openSnackBar(result.message, result.status);
	} /*else {
        this.snackBar.openSnackBar('Error in the command ' + result.message.error.cmd, result.status);
	}*/
    });
  }
}
