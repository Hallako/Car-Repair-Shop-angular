import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {

    authToken: any;
    user: any;
    nodeUrl: String;

  constructor(private http:Http) {
    this.nodeUrl = 'https://localhost:4334';

    if(this.user == null){
     this.user = JSON.parse(localStorage.getItem('user'));
    }
    this.loadToken();
   }

  //###### User functions ##########
  registerUser(user){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post(this.nodeUrl+'/users/register/',user,{headers:headers})
    .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post(this.nodeUrl+'/users/authenticate/',user,{headers:headers})
    .map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type','application/json');
    return this.http.get(this.nodeUrl+'/users/profile/',{headers: headers})
    .map(res => res.json());
  }


  //###### Storage functions ##########
  getUser(){
    if(this.user){
      return this.user
    } else {
    return JSON.parse(localStorage.getItem('user'));
    }
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  //###### Event functions ##########
  addEvent(event){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post(this.nodeUrl+'/events/addevent/',event,{headers:headers})
    .map(res => res.json());
  }

  delEvent(id){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.delete(this.nodeUrl+'/events/deleteevent/'+id,{headers: headers})
    .map(res => res.json());
  }

  getEvents(start, end, user, admin){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type','application/json');
    return this.http.get(this.nodeUrl+'/events/getevents/'
    +start+"/"+end+"/"+user+"/"+admin+"/",{headers: headers})
    .map(res => res.json());}
}
