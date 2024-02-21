import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoryComponent } from './prudiction/component/list-category/list-category.component';
import { AddCategoryComponent } from './prudiction/component/add-category/add-category.component';
import { EditCategoryComponent } from './prudiction/component/edit-category/edit-category.component';
import { BlogpostListComponent } from './prudiction/blog-post/blogpost-list/blogpost-list.component';
import { AddBlogpostsComponent } from './prudiction/blog-post/add-blogposts/add-blogposts.component';
import { EditBlogpostComponent } from './prudiction/blog-post/edit-blogpost/edit-blogpost.component';
import { HomeComponent } from './prudiction/public/home/home.component';
import { BlogDetailsComponent } from './prudiction/public/blog-details/blog-details.component';
import { LogInComponent } from './prudiction/Auth/log-in/log-in.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'BlogPost/:url',
    component:BlogDetailsComponent
  },
  {
    path:'admin/categores',
    component:ListCategoryComponent
  },
  {
    path:'admin/categores/add',
    component:AddCategoryComponent
  },
  {
    path:'admin/categores/:id',
    component:EditCategoryComponent
  },
  {
    path:'admin/blogposts',
    component:BlogpostListComponent
  },
  {
    path:'admin/blogposts/add',
    component:AddBlogpostsComponent
  },
  {
    path:'admin/blogposts/:id',
    component:EditBlogpostComponent
  },
  {
    path:'login',
    component:LogInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
