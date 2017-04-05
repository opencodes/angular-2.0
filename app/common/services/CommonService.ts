import { Component ,Injectable} from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import {Nav} from './Nav';
import {NAVS} from './NavMockData';


@Injectable()
export class CommonService {
    isLoggedIn: boolean = false;

    getNavigations() {
        return Promise.resolve(NAVS);
    }

    // Observable string sources
    private missionAnnouncedSource = new Subject < any > ();
    // Observable string streams
    missionAnnounced$ = this.missionAnnouncedSource.asObservable();
    // Service message commands
    authenticate(user: any) {
        this.isLoggedIn = true;
        this.missionAnnouncedSource.next(user);
    }
    
}