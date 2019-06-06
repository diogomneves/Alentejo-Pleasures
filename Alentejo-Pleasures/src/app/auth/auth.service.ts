import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';

import {Storage} from '@ionic/storage';
import {User} from './user';
import {AuthResponse} from './auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
