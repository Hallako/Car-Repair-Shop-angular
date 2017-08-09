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
  headers: any;
  authHeader: any;
  authHeaderi: any;

  constructor(private http: Http) {
    this.nodeUrl = 'http://localhost:8081/'; //'http://localhost:8081/' for local deployement empty for heroku.

    if (this.user == null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }

    this.loadToken();

    this.headers = new Headers();
    this.headers.append('Content-type', 'application/json');

    this.authHeaderi = new Headers();
    this.authHeaderi.append('Authorization', this.authToken)
    this.authHeaderi.append('Content-type', 'application/json');
  }

  //error handler
  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }


  //###### User functions #######
  registerUser(user) {
    return this.http.post(this.nodeUrl + 'users/register/', user, { headers: this.headers })
      .map(res => res.json());
  }

  //Checks if given username is unique
  checkUsername(user) {
    return this.http.post(this.nodeUrl + 'users/checkname/', user, { headers: this.headers })
      .map(res => res.json());
  }

  //Compares given data if user login is valid
  authenticateUser(user) {
    return this.http.post(this.nodeUrl + 'users/authenticate/', user, { headers: this.headers })
      .map(res => res.json());
  }

  //Gets user information
  getProfile() {
    return this.http.get(this.nodeUrl + 'users/profile/', { headers: this.authHeaderi })
      .map(res => res.json());
  }

  //Gets user information
  getUserById(event) {
    return this.http.post(this.nodeUrl + 'users/getuserbyid/', event, { headers: this.headers })
      .map(res => res.json());
  }

  //Password change (id and new password is passed on "user" object)
  changePassword(user) {
    return this.http.post(this.nodeUrl + 'users/password/', user, { headers: this.authHeaderi })
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
    return this.http.get(this.nodeUrl + 'users/admin', { headers: this.authHeaderi })
      .map(res => res.json()).catch(this.handleError);
  }

  //pushes user object to DB must contain existing user.id
  update(user: User): Observable<User> {
    return this.http.put(this.nodeUrl + 'users/update', user, { headers: this.headers })
      .map((res: Response) => res.json()).catch(this.handleError);
  }


  //###### Event functions ##########
  addEvent(event) {
    return this.http.post(this.nodeUrl + 'events/addevent/', event, { headers: this.headers })
      .map(res => res.json());
  }

  //delete event by id
  delEvent(id) {
    return this.http.delete(this.nodeUrl + 'events/deleteevent/' + id, { headers: this.headers })
      .map(res => res.json());
  }

  //Gets events in certain time range based on user, returns all users events if admin is passed and is true.
  getEvents(start, end, user, location , admin) {
    return this.http.get(this.nodeUrl + 'events/getevents/'
      + start + "/" + end + "/" + user +"/" + location + "/" + admin + "/", { headers: this.authHeaderi })
      .map(res => res.json());
  }

  //Gets all events based on user
  getAllEvents(user, location): Observable<Event[]> {
    return this.http.get(this.nodeUrl + 'events/getuserevents/' + user + "/" + location + "/", { headers: this.authHeaderi })
      .map((res: Response) => res.json()).catch(this.handleError);
  }

  getConfirmationEvents(): Observable<Event[]> {
    return this.http.get(this.nodeUrl + 'events/getconfirmevents/', { headers: this.authHeaderi })
      .map((res: Response) => res.json()).catch(this.handleError);
  }

  confirmEvent(event): Observable<Event> {
    return this.http.post(this.nodeUrl + 'events/confirm/' + event, { headers: this.headers })
      .map((res: Response) => res.json()).catch(this.handleError);
  }

  resetPassword(email) {
    return this.http.post(this.nodeUrl + 'users/resetPassword/', email, { headers: this.headers })
      .map((res: Response) => res.json()).catch(this.handleError);
  }
}
