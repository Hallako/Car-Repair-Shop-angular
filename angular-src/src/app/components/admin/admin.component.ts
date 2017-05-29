import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Http } from '@angular/http'
import { User } from './user'
import { Event } from './event'
import * as moment from 'moment';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

users: User[]
events: Event[]
selectedUser: User
editUser: User

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAllUser().subscribe(users =>
      this.users = users)
  }

  onSelect(user: User) {
    this.selectedUser = user
    this.onEvents()
    this.editUser = null
  }

  editSelected() {
    this.editUser = this.selectedUser
  }

  updateUser(): void {
    this.authService.update(this.selectedUser).subscribe();
    location.reload()
  }

onEvents() {
  this.authService.getAllEvents(this.selectedUser._id).subscribe(events => this.events = events)
}

}
