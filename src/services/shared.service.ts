import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  isLoggedIn: boolean = false;
  constructor() {
  }
}
