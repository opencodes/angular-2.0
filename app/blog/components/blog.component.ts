import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import {Post} from '../services/Post';
import {CommonService} from '../../common/services/CommonService';
import {BlogPostService} from '../services/BlogPostService';

@Component({
    templateUrl: "./app/blog/html/blog.html",
    styleUrls: ["./app/blog/css/blog.css"],
    providers:[BlogPostService]
})

export class BlogComponent{
    title = "Blog";
    errorMessage: string;
    posts : Post[];
    
    constructor(
        private _postService : BlogPostService,
        private route: ActivatedRoute,
        private router: Router,
        private _commonService : CommonService
    ){};
    
    getPosts():void{
        let self = this;
        self._commonService.setState('inProgress');
        this._postService.getBlogPost()
                     .subscribe(
                       posts => {
                           this.posts = posts; 
                           self._commonService.setState('Complete');
                        },
                       error =>  {
                           this.errorMessage = <any>error;
                           self._commonService.setState('Complete');
                       }
        );
    }
    ngOnInit(){
        this.getPosts();
    }
    
}