import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Http } from '@angular/http'
import { User } from '../../variables/user'
import { Event } from '../../variables/event'
import * as moment from 'moment';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SearchService } from '../../services/search.service';
import 'rxjs/Rx'
import { Subject } from 'rxjs/Subject';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: User[];
  user: User;
  userList: User[];
  events: Event[];
  event: Event;
  selectedUser: User;
  start: String;
  end: String;
  search: Boolean;
  username: String;
  showCustomers: Boolean;
  addUserForm: FormGroup;
  addCustomer: Boolean;
  curuser: User;

  private searchTerm$ = new Subject<string>();

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private searchService: SearchService,
    private fb: FormBuilder

  ) {
    this.searchService.search(this.searchTerm$).subscribe(users => this.users = users)
    this.addUserForm = fb.group({
      firstname: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern("[+-\d]+")])],
      address: ['', Validators.compose([Validators.required])],
      area: ['', Validators.compose([Validators.required, Validators.pattern("[0-9]+"), Validators.minLength(5)])],
      city: ['', Validators.compose([Validators.required])],
      notes: [''],
    })
  }

  ngOnInit() {
    this.curuser = this.authService.getUser();
    this.start = moment(new Date()).format('YYYY-MM-DD[T]HH:mm');
    this.end = moment(new Date()).format('YYYY-MM-DD[T]HH:mm');
    this.getConfirms();
  }

  onSelect(user: User) {
    this.selectedUser = user
    this.onEvents();
    this.searchTerm$.next();
  }

  updateUser(): void {
    this.authService.update(this.selectedUser).subscribe();
    this.selectedUser = null;
  }

  onEvents() {
    this.authService.getAllEvents(this.selectedUser._id, this.curuser.location).subscribe(events => {
      var eventit = events
      
      eventit.forEach(event => {
        event.start = moment(event.start).format('DD.MM.YYYY [klo] HH:mm');
        event.end = moment(event.end).format('DD.MM.YYYY [klo] HH:mm');
        
        this.authService.getUserById(event).subscribe(user => {
          if (user != null && event.confirm == false) {
            this.user = user
            event.user = this.user.username;
          } else {
            eventit.splice(eventit.indexOf(event),1);
          }
        });
      });
      this.events = eventit;
    });
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

  getConfirms() {
    this.authService.getConfirmationEvents(this.curuser.location).subscribe(events => {
      
      var eventit = events;
      eventit.forEach(event => {
        event.start = moment(event.start).format('DD.MM.YYYY [klo] HH:mm');
        event.end = moment(event.end).format('DD.MM.YYYY [klo] HH:mm');
        this.authService.getUserById(event).subscribe(user => {
          this.user = user
          if (user != null) {
            event.user = this.user.username
          } else eventit.splice(eventit.indexOf(event),1);
        })
      });
      this.events = eventit
    })
  }

  confirmEvent(event) {
    this.authService.confirmEvent(event._id).subscribe();
    this.events.splice(this.events.indexOf(event), 1);
    this.flashMessage.show('Varaus hyväksytty', { cssClass: 'alert-success', timeout: 3000 });
  }

  eventSearch(start, end) {
    end = moment(this.end).format('YYYY-MM-DD[T]HH:mm');
    start = moment(this.start).format('YYYY-MM-DD[T]HH:mm');
    var userId = null
    var admin = true
    this.authService.getEvents(start, end, userId, this.curuser.location, admin).subscribe(events => {
      this.events = events
      this.events.forEach(event => {
        event.start = moment(event.start).format('DD.MM.YYYY [klo] HH:mm');
        event.end = moment(event.end).format('DD.MM.YYYY [klo] HH:mm');
        this.authService.getUserById(event).subscribe(user => {
          if (user != null) {
            this.user = user
            event.user = this.user.username
          } else event.user = 'Hallinnon luoma'
        })
      });
    });
    this.search = true;
  }

  getEventUser(event) {
    this.authService.getUserById(event).subscribe(user => {
      this.user = user
    })
  }

  getUsers() {
    var location = {
      location: this.curuser.location
    }
    this.authService.getAllUser(location).subscribe(users => {
      this.userList = users;
    });
    this.showCustomers = true;
  }

  addUser() {
    const user = new User
    user.firstname = this.addUserForm.get('firstname').value
    user.lastname = this.addUserForm.get('lastname').value
    user.email = this.addUserForm.get('email').value
    user.phone = this.addUserForm.get('phone').value
    user.address = this.addUserForm.get('address').value
    user.area = this.addUserForm.get('area').value
    user.city = this.addUserForm.get('city').value
    user.notes = this.addUserForm.get('notes').value
    user.location = this.curuser.location

    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Asiakas lisätty onnistuneesti', { cssClass: 'alert-success', timeout: 3000 });
      } else {
        this.flashMessage.show('Jokin meni vikaan', { cssClass: 'alert-danger', timeout: 3000 });
      }
    })
    this.addCustomer = false;
  }

}
