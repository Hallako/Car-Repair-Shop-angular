import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatService {

  nodeUrl: String;

  constructor(private http: Http) {
    this.nodeUrl = 'http://localhost:8081/'; //'http://localhost:8081/' for local deployement empty for heroku.
  }

  getChatByRoom(room) {
    return new Promise((resolve, reject) => {
      this.http.get(this.nodeUrl + 'chat/' + room)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveChat(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.nodeUrl + 'chat/', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
