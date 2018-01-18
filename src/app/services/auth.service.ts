import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  url='http://www.meraki-s.com/rent/ms-synergy/php/checklogin.php?';
  constructor(public http : HttpClient) { }

  loginClient(client): Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding",
  });
    return this.http.post(this.url,JSON.stringify(client));
  }


}
