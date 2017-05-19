import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {

    authToken: any;
    user: any;

  constructor(private http:Http) {
    if(this.user == null){
     this.user = JSON.parse(localStorage.getItem('user'));
    }
    this.loadToken();
   }

  //###### User functions ##########
  registerUser(user){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/users/register',user,{headers:headers})
    .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate',user,{headers:headers})
    .map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type','application/json');
    return this.http.get('http://localhost:3000/users/profile',{headers: headers})
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
    return this.http.post('http://localhost:3000/events/addevent',event,{headers:headers})
    .map(res => res.json());
  }
  
  delEvent(id){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.delete('http://localhost:3000/events/deleteevent/'+id,{headers: headers})
    .map(res => res.json());
  }

  getEvents(start, end, user){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type','application/json');
    return this.http.get('http://localhost:3000/events/getevents/'
    +start+"/"+end+"/"+user,{headers: headers})
    .map(res => res.json());}
}
