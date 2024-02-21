import { Component, OnInit } from '@angular/core';
import { BlogPostServiceService } from '../../blog-post/Services/blog-post-service.service';
import { Observable } from 'rxjs';
import { blogpostmodel } from '../../blog-post/Model/blogpost.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  blogpost$?:Observable<blogpostmodel[]>

  constructor(private blogpostsService:BlogPostServiceService)
  {

  }
  ngOnInit(): void {
  this.blogpost$= this.blogpostsService.GetAllblogposts();
  }
}
