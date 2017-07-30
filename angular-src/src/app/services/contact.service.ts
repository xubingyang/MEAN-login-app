import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {
  	contact: any;
	isDev: boolean;

  constructor(private http:Http) {
  	this.isDev = true; // Change to false before deployment
  }

  editContact(contact){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('contact/edit');
    return this.http.post(ep, contact,{ headers: headers })
    .map(res => res.json());
  }

  getContact(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/profile');
    return this.http.get(ep,{headers: headers})
    .map(res => res.json());
  }

prepEndpoint(ep){
    if(this.isDev){
      return ep;
    } else {
      return '/'+ep;
    }
  }
}
