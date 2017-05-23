import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { User } from './user'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

users: User[]
selectedUser: User
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAllUser().subscribe(users =>
      this.users = users)
  }

  onSelect(user: User) {
    this.selectedUser = user
  }


}
