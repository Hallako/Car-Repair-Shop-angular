import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Http } from '@angular/http'
import { User } from './user'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

users: User[]
selectedUser: User
editUser: User
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAllUser().subscribe(users =>
      this.users = users)
  }

  onSelect(user: User) {
    this.selectedUser = user
    this.editUser = null
  }

  editSelected(user: User) {
    this.editUser = this.selectedUser
  }

}
