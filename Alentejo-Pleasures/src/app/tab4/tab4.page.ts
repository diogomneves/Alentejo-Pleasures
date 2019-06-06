import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(private  authService: AuthService, private  router: Router) {}

  logout(form) {
    this.authService.logout();
    this.router.navigateByUrl('login');
    }
  }
