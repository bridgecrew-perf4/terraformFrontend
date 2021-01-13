import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  getResult() {
    return this.http.get(environment.apiBaseUrl);
  }

  cliLogin() {
    return this.http.post(environment.apiBaseUrl + '/azure/cli', '123');
  }
  getSubscription() {
    return this.http.post(environment.apiBaseUrl + '/azure/subscription', '123');
  }
  setSubscription(selectedSubs: string) {
    return this.http.post(environment.apiBaseUrl + '/azure/setsubs', {selectedSubs});
  }
}
