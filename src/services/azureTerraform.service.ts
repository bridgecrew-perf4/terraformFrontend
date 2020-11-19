import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Authentication} from '../dto/Authentication';
import {SecondScreen} from '../dto/SecondScreen';

@Injectable({
  providedIn: 'root'
})
export class AzureTerraformService {

  constructor(private http: HttpClient) {
  }

  getResult() {
    return this.http.get(environment.apiBaseUrl);
  }

  postAzureAuth(authentication: Authentication) {
    return this.http.post(environment.apiBaseUrl + '/azure/auth', {authentication});
  }

  postAzureSecond(secondScreen: SecondScreen) {
    return this.http.post(environment.apiBaseUrl + '/azure/second', {secondScreen});
  }

  postDeploy() {
    return this.http.post(environment.apiBaseUrl + '/azure/deploy','123');
  }
}
