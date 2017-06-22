import { Injectable} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import {tokenNotExpired} from 'angular2-jwt';
import { Subject } from 'rxjs/Subject'
import { User } from '../variables/user'
import {Observable} from 'rxjs/Rx';
import { Event } from '../variables/event'

@Injectable()
export class AuthService {

  authToken: any;
  user: any;
  nodeUrl: String;


  constructor(private http: Http) {
    this.nodeUrl = 'http://localhost:8081/'; //'http://localhost:8081/' for local deployement empty for heroku.

    if (this.user == null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }

    this.loadToken();
  }

  //error handler
  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  //###### User functions #######

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(this.nodeUrl + 'users/register/', user, { headers: headers })
      .map(res => res.json());
  }

  //Checks if given username is unique
  checkUsername(user) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(this.nodeUrl + 'users/checkname/', user, { headers: headers })
      .map(res => res.json());
  }

  //Compares given data if user login is valid
  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(this.nodeUrl + 'users/authenticate/', user, { headers: headers })
      .map(res => res.json());
  }

  //Gets user information
  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type', 'application/json');
    return this.http.get(this.nodeUrl + 'users/profile/', { headers: headers })
      .map(res => res.json());
  }

  //Gets user information
  getUserById(event) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(this.nodeUrl + 'users/getuserbyid/', event, { headers: headers })
      .map(res => res.json());
  }

  //Password change (id and new password is passed on "user" object)
  changePassword(user) {
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type', 'application/json');
    //console.log(user);
    return this.http.post(this.nodeUrl + 'users/password/', user, { headers: headers })
      .map(res => res.json());
  }

  //###### Storage functions ##########
  getUser() {
    if (this.user) {
      return this.user
    } else {
      return JSON.parse(localStorage.getItem('user'));
    }
  }

  //Stores token and user info to localstorage
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

  //checks token to see if loggedin
  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  //Returns boolean based on if user is admin
  getAdmin() {
    if (this.loggedIn())
      return this.getUser().admin
  }

  //Returns all users
  getAllUser(): Observable<User[]> {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type', 'application/json');
    return this.http.get(this.nodeUrl + 'users/admin', { headers: headers })
      .map(res => res.json()).catch(this.handleError);
  }

  //pushes user object to DB must contain existing user.id
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

  //delete event by id
  delEvent(id) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.delete(this.nodeUrl + 'events/deleteevent/' + id, { headers: headers })
      .map(res => res.json());
  }

  //Gets events in certain time range based on user, returns all users events if admin is passed and is true.
  getEvents(start, end, user, admin) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type', 'application/json');
    return this.http.get(this.nodeUrl + 'events/getevents/'
      + start + "/" + end + "/" + user + "/" + admin + "/", { headers: headers })
      .map(res => res.json());
  }

  //Gets all events based on user
  getAllEvents(user): Observable<Event[]> {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type', 'application/json');
    return this.http.get(this.nodeUrl + 'events/getuserevents/' + user + "/", { headers: headers })
      .map((res: Response) => res.json()).catch(this.handleError);
  }

  getConfirmationEvents(): Observable<Event[]> {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type', 'application/json');
    return this.http.get(this.nodeUrl + 'events/getconfirmevents/', { headers: headers })
      .map((res: Response) => res.json()).catch(this.handleError);
  }

  confirmEvent(event): Observable<Event> {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(this.nodeUrl + 'events/confirm/' + event, { headers: headers })
      .map((res: Response) => res.json()).catch(this.handleError);
  }
}
