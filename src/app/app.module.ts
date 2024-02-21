
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListCategoryComponent } from './prudiction/component/list-category/list-category.component';
import { AddCategoryComponent } from './prudiction/component/add-category/add-category.component';
import{ HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditCategoryComponent } from './prudiction/component/edit-category/edit-category.component';
import { BlogpostListComponent } from './prudiction/blog-post/blogpost-list/blogpost-list.component';
import { AddBlogpostsComponent } from './prudiction/blog-post/add-blogposts/add-blogposts.component';
import { EditBlogpostComponent } from './prudiction/blog-post/edit-blogpost/edit-blogpost.component';
import { ImageSelectorComponent } from './Shared/Components/image-selector/image-selector.component';
import { HomeComponent } from './prudiction/public/home/home.component';
import { BlogDetailsComponent } from './prudiction/public/blog-details/blog-details.component';
import { LogInComponent } from './prudiction/Auth/log-in/log-in.component';
import { MarkdownModule } from 'ngx-markdown';
import { AuthInterceptor } from './intersaptor/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    BlogpostListComponent,
    AddBlogpostsComponent,
    EditBlogpostComponent,
    ImageSelectorComponent,
    HomeComponent,
    BlogDetailsComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     HttpClientModule,
     BrowserAnimationsModule,
     MarkdownModule.forRoot()
  ],
  providers: [
   {
    provide :HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
