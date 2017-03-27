import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import {Post} from '../services/Post';
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
        private router: Router
    ){};
    
    getPosts():void{
        this._postService.getBlogPost()
                     .subscribe(
                       posts => this.posts = posts,
                       error =>  this.errorMessage = <any>error);
    }
    ngOnInit(){
        console.log(this.route)
        this.getPosts();
    }
    
}