import { Component ,Injectable} from '@angular/core';
import {Nav} from './Nav';
import {NAVS} from './NavMockData';


@Injectable()
export class CommonService{
    getNavigations() {
        return Promise.resolve(NAVS);
    }
}