import { Component,  OnChanges , OnInit} from '@angular/core';

import {CommonService} from './common/services/CommonService';
import {Nav} from './common/services/Nav';
import { Subscription }   from 'rxjs/Subscription';


@Component({
  selector: 'my-app',
  templateUrl: './app/main.html',
  providers:[CommonService]
})
export class AppComponent {
    name = 'Angular';
    navs: Nav[];
    isLoggedIn: boolean = false;

    mission = '<no mission announced>';
    announced = false;
    subscription: Subscription;
    user:any;

    constructor(private _commonService: CommonService) {
        this.isLoggedIn = _commonService.isLoggedIn;
        this.subscription = _commonService.missionAnnounced$.subscribe(
            user => {
                this.user = {
                    id : user.id,
                    name : "Guest User"
                };
                this.announced = true;
                this.isLoggedIn = true;
                
            });
    }

    getNavs(): void {
        this._commonService.getNavigations().then(nav => this.navs = nav);
    }

    ngOnInit() {
        this.getNavs();
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
}