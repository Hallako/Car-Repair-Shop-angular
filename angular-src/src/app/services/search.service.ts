import { Injectable } from '@angular/core';
import { Http, Headers }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../variables/user'
import { AuthService }  from './auth.service'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/Rx'

@Injectable()
export class SearchService {
  constructor(private http: Http,
              private authService: AuthService
  ) {}
  search(term: Observable<string>){
    return term.debounceTime(300).distinctUntilChanged().switchMap(term => term ? this.searchEntries(term): Observable.of<User[]>([]))
  }

  searchEntries(term) {
    let headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-type', 'application/json');
    return this.http.get(this.authService.nodeUrl + 'users/search/' + term, {headers: headers}).map(res => res.json())
  }
}
