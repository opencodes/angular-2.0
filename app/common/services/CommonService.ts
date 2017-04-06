import { Component ,Injectable} from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import {Nav} from './Nav';
import {NAVS} from './NavMockData';


@Injectable()
export class CommonService {
    isLoggedIn: boolean = false;
    isLoading: boolean = false;

    getNavigations() {
        return Promise.resolve(NAVS);
    }

    // Observable string sources
    private missionAnnouncedSource = new Subject < any > ();
    // Observable string streams
    missionAnnounced$ = this.missionAnnouncedSource.asObservable();

    private serviceState = new Subject < boolean>();

    $serviceState = this.serviceState.asObservable();

    authenticate(user: any) {
        this.isLoggedIn = true;
        this.missionAnnouncedSource.next(user);
    }
    
    setState(state:string){
        if(state === "inProgress"){
            this.isLoading = true;
        }else{
            this.isLoading = false;
        }
        this.serviceState.next(this.isLoading);        
    }
    
}