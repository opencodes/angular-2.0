import { Component,  OnChanges , OnInit} from '@angular/core';

import {CommonService} from './common/services/CommonService';
import {Nav} from './common/services/Nav';


@Component({
  selector: 'my-app',
  templateUrl: './app/main.html',
  providers:[CommonService]
})
export class AppComponent  { 
    name = 'Angular'; 
    navs : Nav[];
    isLoggedIn : boolean = false;
    constructor(private _commonService : CommonService){
        
    }
    
    getNavs() : void{      
        
        this._commonService.getNavigations().then(nav => this.navs = nav);
    }
    
    ngOnInit(){
        this.getNavs();
    }

    ngOnChange(val: boolean) {
        console.log('isLoggedIn',val)
        this.isLoggedIn = val;
    }
}
