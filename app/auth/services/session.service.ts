import {Injectable} from '@angular/core';

@Injectable()
export class Session {
    
    id:string;
    userId:number;
    userRole:string;
    
    constructor(){
        this.id = null;
        this.userId = null;
        this.userRole = null;
    }
    
    public create(sessionId:string, userId:number, userRole:string): void {
        console.log(sessionId, userId, userRole)
        this.id = sessionId;
        this.userId = userId;
        this.userRole = userRole;
    }
    public destroy(): void {
        console.log('Destroyed')
        this.id = null;
        this.userId = null;
        this.userRole = null;
    }
}