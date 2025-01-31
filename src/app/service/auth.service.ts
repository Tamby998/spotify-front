import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  location = inject(Location);
  notConnected = 'NOT_CONNECTED';
  constructor() {}
}
