import { Component, OnDestroy, OnInit } from '@angular/core';
import { Addblogposts } from '../Model/add-blogpost.model';
import { BlogPostServiceService } from '../Services/blog-post-service.service';
import { Route, Router } from '@angular/router';
import { CategoryService } from '../../Service/category.service';
import { Observable, Subscription } from 'rxjs';
import { categorymodel } from '../../Models/category.model';
import { ImageServiceService } from 'src/app/Shared/Components/image-selector/image-service.service';

@Component({
  selector: 'app-add-blogposts',
  templateUrl: './add-blogposts.component.html',
  styleUrls: ['./add-blogposts.component.css']
})
export class AddBlogpostsComponent implements OnInit,OnDestroy{
categores$?:Observable<categorymodel[]>
model:Addblogposts
isImageSelectorVisible:boolean=false;
imageselectorsubscription?:Subscription

constructor (private service:BlogPostServiceService,private router:Router,private categoryservice:CategoryService,private imageservice:ImageServiceService) {
  this.model={author:'',content:'',title:'',isvisable:true,shortDescription:'',pulishedDate:new Date(),featuredImageUrl:'',urlHandler:'',categores:''}
}

  ngOnInit(): void {
    this.categores$=this.categoryservice.getAllcategory();
   this.imageselectorsubscription=this.imageservice.OnselectImage().subscribe({
      next:(res)=>{
        this.model.featuredImageUrl=res.url;
        this.closeImageSelector();
      }
    })
  }

onFormSubmit():void
{
  console.log(this.model);
  this.service.createblogposts(this.model).subscribe({
   next:res=>{this.router.navigateByUrl('/admin/blogposts') },error:err=>{console.log(err)}
  })
}
openImageSelector(): void {
  this.isImageSelectorVisible = true;
}
closeImageSelector(): void {
  this.isImageSelectorVisible = false
}
ngOnDestroy(): void {
  this.imageselectorsubscription?.unsubscribe();
}

}

