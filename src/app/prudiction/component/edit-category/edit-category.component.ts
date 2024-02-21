import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../../Service/category.service';
import { categorymodel } from '../../Models/category.model';
import { UpdateCategoryRequist } from '../../Models/Update-category-Requist';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit,OnDestroy{
  id:string | null=null;

  paramsdubscribsion?:Subscription
   editcategorySubscriptions?:Subscription
  constructor (private route:ActivatedRoute,private service:CategoryService,private router:Router) {
    
  }
  category?:categorymodel;
  ngOnDestroy(): void {
   this.paramsdubscribsion?.unsubscribe();

   this.editcategorySubscriptions?.unsubscribe();
  }
  ngOnInit(): void {
  this.paramsdubscribsion=this.route.paramMap.subscribe({
      next:(par)=>{
       this.id= par.get('id');

       if(this.id)
       {
        //logic APi equal id
         this.service.getbyid(this.id).subscribe({
          next:res=>{
           this.category=res
          },
          error:err=>{console.log(err)}
         });

       }
      }
      
    })
  }
  onFormSubmit():void
  {
    const updatecategory:UpdateCategoryRequist={
      name:this.category?.name ??'',
      urlHandler:this.category?.urlHandler??''
    }
    //pass service 
    if(this.id)
    {
     this.editcategorySubscriptions= this.service.updateCategory(this.id,updatecategory).subscribe({
      next:res=>{
        this.router.navigateByUrl('/admin/categores')
      },
      error:err=>{
        console.log(err);
      }

    })
  }
  }

  OnDelete():void
  {
    if(this.id)
    {
    this.service.delteCategory(this.id).subscribe({
      next:res=>{
      this.router.navigateByUrl('/admin/categores')
      },error:err=>{
        console.log(err);
      }
    })
    }
  console.log('not Found');
  }

}
