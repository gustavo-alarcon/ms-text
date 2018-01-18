import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {URLSearchParams, Headers} from '@angular/http';
import {  BaseRequestOptions, RequestOptions, RequestOptionsArgs} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as plivo from 'plivo';

@Injectable()
export class MessagesService {
  p = {
    authId: 'MAYZKXNWE0ZWI1MTBKOG',
    authToken: 'MjY1YmEzMGQ5NWQ5ZDhhYjk4YmZjOGE3NDlkMmVi'
  };
  constructor(public http: HttpClient) { }

  sendMessage(text,phone){
    let headers = new HttpHeaders({
      'Authorization': 'Basic '+btoa(this.p.authId+':'+this.p.authToken),
      'Content-Type':'application/json',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding"
  });
    let params = {
      "src":"+51555",
      "dst" : "+51"+phone,
      "text" : text
    }    
    return this.http.post('https://cors-anywhere.herokuapp.com/https://api.plivo.com/v1/Account/MAYZKXNWE0ZWI1MTBKOG/Message/',JSON.stringify(params),{headers:headers});
  }

  addClient(client,db){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding",
  });
    return this.http.post('http://www.meraki-s.com/rent/ms-synergy/php/handler-addCustomer.php?db='+db,JSON.stringify(client));
  }

  sendMessages(messages){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding",
  });
    return this.http.post('http://www.meraki-s.com/rent/ms-synergy/php/handler-addToCrono.php?db='+JSON.parse(localStorage.getItem('db')),JSON.stringify(messages));
  }


}
