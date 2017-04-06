import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { EVENTS, USER_ROLES, URL } from './auth.constant';
import { Auth } from './Auth';
import { Session } from './session.service';


@Injectable()
export class AuthService {
    
    session: any;

    /**
     * @param  {Http} private http
     * @param  {Session} private _sessionService
     */
    constructor(private http: Http, private _sessionService: Session) {
        this.session = _sessionService;
    };

    /**
     * @returns Observable
     */
    public login(): Observable<Auth[]> {
        let self = this;
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({
            headers: headers
        });

        return this.http.post(URL.login, {})
            .map(function (res) {
                let body = res.json();
                self._sessionService.create(body.id, body.userId, 'admin');
                return self.extractData(res);
            })
            .catch(this.handleError);
    }

    /**
     * @returns boolean
     */
    public isAuthenticated(): boolean {

        return !!this._sessionService.userId;
    }
    /**
     * @returns boolean
     */
    public isAuthorized(): boolean {
        let authorizedRoles: any[];
        if (!Array.isArray(USER_ROLES)) {
            authorizedRoles = [USER_ROLES];
        }
        return (this.isAuthenticated() && USER_ROLES[this._sessionService.userRole] !== -1);
    }

    /**
     * @param  {Response} res
     */
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    /**
     * @param  {Response|any} error
     */
    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }
}