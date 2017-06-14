import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Http } from '@angular/http'
import * as moment from 'moment';
import { Event } from './event'
import { FlashMessagesService } from 'angular2-flash-messages';
import 'rxjs/Rx'
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  events: Event[]
  event:  Event
  start: String
  end: String

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
  ) {}

  ngOnInit() {
    this.start = moment(new Date()).format('YYYY-MM-DD[T]HH:mm');
    this.end = moment(new Date()).format('YYYY-MM-DD[T]HH:mm');
  }

  deleteEvent(event) {
    this.authService.delEvent(event._id).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Tapahtuma poistettu onnistuneesti', { cssClass: 'alert-success', timeout: 3000 });
        this.events.splice(this.events.indexOf(event), 1);
      } else {
        this.flashMessage.show('Jokin meni vikaan', { cssClass: 'alert-danger', timeout: 3000 });
      }
    });
  }

  eventSearch(start, end) {

    end = moment(end).format('YYYY-MM-DD[T]HH:mm');
    start = moment(start).format('YYYY-MM-DD[T]HH:mm');

    this.authService.getEvents(start, end).subscribe(events => {
      this.events = events
     
      this.events.forEach(event => {
        event.start = moment(event.start).format('DD.MM.YYYY [klo] HH:mm');
        event.end = moment(event.end).format('DD.MM.YYYY [klo] HH:mm');
      });
    });
  }
}