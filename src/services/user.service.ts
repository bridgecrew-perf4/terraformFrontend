import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {User} from '../dto/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getResult() {
    return this.http.get(environment.apiBaseUrl);
  }

  registerUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/users/register',user);
  }

  loginUser(user: User) {
    console.log(user);
    return this.http.post(environment.apiBaseUrl + '/users/login', user);
  }
}
