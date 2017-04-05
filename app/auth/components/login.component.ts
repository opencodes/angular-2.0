import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {AuthService} from '../services/auth.service';
import {CommonService} from '../../common/services/CommonService';
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
    isAuthenticated: boolean;

    constructor(
        private _authService: AuthService, 
        private _commonService: CommonService,
        private router: Router) {
        
            this.isAuthenticated = _commonService.isLoggedIn;
            if(_commonService.isLoggedIn){
                this.router.navigate(['/profile']);
            }
        }

    login(): void {
        let self = this;
        this._authService.login().subscribe(function (user) {
                self.user = < any > user
                self.isAuthenticated = self._authService.isAuthenticated();
                self._commonService.authenticate(user);
            
                
            },
            error => this.errorMessage = < any > error);
    }
}