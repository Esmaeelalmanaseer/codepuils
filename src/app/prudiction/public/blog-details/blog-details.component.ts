import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostServiceService } from '../../blog-post/Services/blog-post-service.service';
import { Observable } from 'rxjs';
import { blogpostmodel } from '../../blog-post/Model/blogpost.model';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
blogpost$?:Observable<blogpostmodel>
  url:string| null=null
  constructor(private route:ActivatedRoute,private seriveblogpost:BlogPostServiceService)
  {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
      this.url=params.get('url')
      }
    });
    if(this.url)
    {
    this.blogpost$=this.seriveblogpost.getByUrlHandle(this.url)
    }
  }
}
