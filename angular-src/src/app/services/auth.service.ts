import { Injectable} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import {tokenNotExpired} from 'angular2-jwt';
import { Subject } from 'rxjs/Subject'
import { User } from '../components/admin/user'
import {Observable} from 'rxjs/Rx';
import { Event } from '../components/admin/event'




@Injectable()
export class AuthService {

  authToken: any;
  user: any;
  nodeUrl: String;

  constructor(private http: Http) {
    this.nodeUrl = 'http://localhost:8081/';

    if (this.user == null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    this.loadToken();
  }

  //###### User functions ##########
  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(this.nodeUrl + 'users/register/', user, { headers: headers })
      .map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(this.nodeUrl + 'users/authenticate/', user, { headers: headers })
      .map(res => res.json());
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type', 'application/json');
    return this.http.get(this.nodeUrl + 'users/profile/', { headers: headers })
      .map(res => res.json());
  }

  changePassword(user) {
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type', 'application/json');
    //console.log(user);
    return this.http.post(this.nodeUrl + 'users/password/', user, { headers: headers })
      .map(res => res.json());
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  //###### Storage functions ##########
  getUser() {
    if (this.user) {
      return this.user
    } else {
      return JSON.parse(localStorage.getItem('user'));
    }
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  getAdmin() {
    if (this.loggedIn())
      return this.getUser().admin
  }

  getAllUser(): Observable<User[]> {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type', 'application/json');
    return this.http.get(this.nodeUrl + 'users/admin', { headers: headers })
      .map((res: Response) => res.json()).catch(this.handleError);
  }

  update(user: User): Observable<User> {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.put(this.nodeUrl + 'users/update', user, { headers: headers })
      .map((res: Response) => res.json()).catch(this.handleError);
  }


  //###### Event functions ##########
  addEvent(event) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(this.nodeUrl + 'events/addevent/', event, { headers: headers })
      .map(res => res.json());
  }

  delEvent(id) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.delete(this.nodeUrl + 'events/deleteevent/' + id, { headers: headers })
      .map(res => res.json());
  }

  getEvents(start, end, user, admin) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type', 'application/json');
    return this.http.get(this.nodeUrl + 'events/getevents/'
      + start + "/" + end + "/" + user + "/" + admin + "/", { headers: headers })
      .map(res => res.json());
  }

  getAllEvents(user): Observable<Event[]> {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type', 'application/json');
    return this.http.get(this.nodeUrl + 'events/getuserevents/' + user + "/", { headers: headers })
    .map((res: Response) => res.json()).catch(this.handleError);
  }

}
