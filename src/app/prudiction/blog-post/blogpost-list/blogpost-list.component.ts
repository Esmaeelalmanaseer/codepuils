import { Component, OnInit } from '@angular/core';
import { BlogPostServiceService } from '../Services/blog-post-service.service';
import { RouterTestingHarness } from '@angular/router/testing';
import { blogpostmodel } from '../Model/blogpost.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {

  model$?:Observable<blogpostmodel[]>
  constructor (private service:BlogPostServiceService) {
    
  }
  ngOnInit(): void {
  this.model$=this.service.GetAllblogposts();
    
}
}
