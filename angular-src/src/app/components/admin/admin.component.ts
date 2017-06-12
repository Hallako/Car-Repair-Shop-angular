import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Http } from '@angular/http'
import { User } from './user'
import { Event } from './event'
import * as moment from 'moment';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SearchService } from '../../services/search.service';
import 'rxjs/Rx'
import { Subject }           from 'rxjs/Subject';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: User[]
  user: User
  confirms: Event[]
  confirm: Event
  events: Event[]
  selectedUser: User
  editUser: User
  start: String
  end: String
  search: Boolean
  username: String


  private searchTerm$ = new Subject<string>();

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private searchService: SearchService,

  ) {
    this.searchService.search(this.searchTerm$).subscribe(users => this.users = users)
  }


  ngOnInit() {
    this.getConfirms()
    this.start = moment(new Date()).format('YYYY-MM-DD[T]HH:mm');
    this.end = moment(new Date()).format('YYYY-MM-DD[T]HH:mm');
  }

  onSelect(user: User) {
    this.selectedUser = user
    this.editUser = null
    this.onEvents();
  }

  editSelected() {
    this.editUser = this.selectedUser
  }

  updateUser(): void {
    this.authService.update(this.selectedUser).subscribe();
    location.reload()
  }


  onEvents() {
    this.authService.getAllEvents(this.selectedUser._id).subscribe(events => {
      this.events = events
      this.events.forEach(event => {
        event.start = moment(event.start).format('DD.MM.YYYY [klo] HH:mm');
        event.end = moment(event.end).format('DD.MM.YYYY [klo] HH:mm');
        this.authService.getUserById(event).subscribe(user => {
          if(user != null) {
                    this.user = user
                    event.user = this.user.username
                  }else event.user = 'Hallinnon luoma'
      })
      });
    })
  }

  deleteEvent(eventId) {
    this.authService.delEvent(eventId).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Tapahtuma poistettu onnistuneesti', { cssClass: 'alert-success', timeout: 3000 });
        this.confirms.splice(this.confirms.indexOf(eventId),1);
      } else {
        this.flashMessage.show('Jokin meni vikaan', { cssClass: 'alert-danger', timeout: 3000 });
      }

    })

  }

  getConfirms() {
    this.authService.getConfirmationEvents().subscribe(confirms => {
      this.confirms = confirms;
      this.confirms.forEach(confirm => {
        confirm.start = moment(confirm.start).format('DD.MM.YYYY [klo] HH:mm');
        confirm.end = moment(confirm.end).format('DD.MM.YYYY [klo] HH:mm');
        this.authService.getUserById(confirm).subscribe(user => {this.user = user
          if(user != null) {
          confirm.user = this.user.username
        } else confirm.user = 'Hallinnon luoma'
        })
      });
    })
    return this.confirms
  }

  confirmEvent(event) {
    this.authService.confirmEvent(event._id).subscribe();
    this.confirms.splice(this.confirms.indexOf(event),1);
    this.flashMessage.show('Varaus hyväksytty', { cssClass: 'alert-success', timeout: 3000 });
  }

  eventSearch(start, end) {
    end = moment(this.end).format('YYYY-MM-DD[T]HH:mm');
    start = moment(this.start).format('YYYY-MM-DD[T]HH:mm');
    var userId = null
    var admin = true
    this.authService.getEvents(start, end, userId, admin).subscribe(events => {
      this.events = events
      this.events.forEach(event => {
        event.start = moment(event.start).format('DD.MM.YYYY [klo] HH:mm');
        event.end = moment(event.end).format('DD.MM.YYYY [klo] HH:mm');
        this.authService.getUserById(event).subscribe(user => {
          if(user != null) {
            this.user = user
            event.user = this.user.username
          }else event.user = 'Hallinnon luoma'
      })
      });
    });

    this.search = true;
  }

  getEventUser(event) {
    this.authService.getUserById(event).subscribe(user => {this.user = user
    })
  }

}
