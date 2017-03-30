import { Component, EventEmitter, Input, Output } from '@angular/core';

import {AuthService} from '../services/auth.service';

import {Session} from '../services/session.service';

@Component({
  templateUrl: './app/auth/html/login.html',
  styleUrls: ['./app/auth/css/login.css'],
  providers:[AuthService, Session]
})

export class LoginComponent {
    title = 'Login Component';
    user: any;
    errorMessage: string;
    isAuthenticated: boolean = false;
    @Output() isLoggedIn = new EventEmitter<boolean>();

    constructor(private _authService: AuthService) {

    }

    login(): void {
        let self = this;
        this._authService.login().subscribe(function (user) {
            self.user = < any > user
            self.isAuthenticated = self._authService.isAuthenticated();
            self.isLoggedIn.emit(true);
        },
        error => this.errorMessage = < any > error);
    }
}