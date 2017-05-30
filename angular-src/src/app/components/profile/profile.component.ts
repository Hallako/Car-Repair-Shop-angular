import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages'
import { Router } from '@angular/router'
import { Event } from '../admin/event'
import * as moment from 'moment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:Object;

  newPassword:String;
  newPassword2:String;

  events:Event[];

  constructor(
    private authService: AuthService,
    private flashmessage: FlashMessagesService,
    private router: Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log('error');
      return false;
    });

    this.authService.getAllEvents(this.authService.getUser().id).subscribe(events => {
      this.events = events;
      this.events.forEach(event => {
        event.start = moment(event.start).format('DD.MM.YYYY [klo] HH:mm');
        event.end = moment(event.end).format('DD.MM.YYYY [klo] HH:mm');
      });

      //console.log(this.events);
  })
}

  onPasswordChange(){
    this.newPassword;
    this.newPassword2;

    let user = {
      id: this.authService.getUser().id,
      password: this.newPassword
    };

    if (this.authService.loggedIn()) {
      if (this.newPassword == this.newPassword2) {
        this.authService.changePassword(user).subscribe(res => {
          this.flashmessage.show(res, {cssClass: 'alert-success', timeout:3000});;
          location.reload();
        });
      } else {
        this.flashmessage.show('Vahvista salasana', {
          cssClass: 'alert-danger',
          timeout: 3000
        });
        }
    }
  }
}
