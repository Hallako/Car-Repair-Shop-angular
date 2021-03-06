import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Location } from '@angular/common'

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService,
    private router: Router,
    private location: Location) {
  }

  canActivate() {
    if (this.authService.getAdmin() != null) {
      if (this.authService.getAdmin() === true) {
        return true;
      }
    }
      this.location.back()
      return false
  }
}
