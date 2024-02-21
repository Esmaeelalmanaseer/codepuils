import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { BlogPostServiceService } from '../Services/blog-post-service.service';
import { blogpostmodel } from '../Model/blogpost.model';
import { CategoryService } from '../../Service/category.service';
import { categorymodel } from '../../Models/category.model';
import { UpdateBlogpost } from '../Model/Update-blogposts.model';
import { ImageServiceService } from 'src/app/Shared/Components/image-selector/image-service.service';

@Component({
  selector: 'app-edit-blogpost',
  templateUrl: './edit-blogpost.component.html',
  styleUrls: ['./edit-blogpost.component.css']
})
export class EditBlogpostComponent implements OnInit, OnDestroy {


  categores$?: Observable<categorymodel[]>;

  id: string | null = null;
  model?: blogpostmodel
  routerSubcription?: Subscription
  selectedcategores?: string[];
  UpdateblogpostsSubsciption?: Subscription
  getblogpost?: Subscription
  deleteblogposts?: Subscription
  isImageSelectorVisible: boolean = false
  selectorImageSubscription?: Subscription

  constructor(private router: ActivatedRoute, private service: BlogPostServiceService, private categortservice: CategoryService, private rout: Router, private imageserivc: ImageServiceService) {

  }

  ngOnInit(): void {
    this.categores$ = this.categortservice.getAllcategory();


    this.routerSubcription = this.router.paramMap.subscribe({
      next: (res) => { this.id = res.get('id') }
    })

    //servics
    if (this.id) {
      this.getblogpost = this.service.getblogpostbyId(this.id).subscribe({
        next: res => { this.model = res; this.selectedcategores = res.categores.map(x => x.id) }
      })
    }
    this.imageserivc.OnselectImage().subscribe({
      next: (res) => {
        if (this.model) {
          this.model.featuredImageUrl = res.url;
          this.isImageSelectorVisible=false
        }

      }, error: err => { console.log(err) }
    })
  }
  onFormSubmit(): void {
    if (this.id && this.model) {
      var UpdateBlogpost: UpdateBlogpost = {
        author: this.model.author, title: this.model.title, content: this.model.content
        , featuredImageUrl: this.model.featuredImageUrl
        , urlHandler: this.model.urlHandler, isvisable: this.model.isvisable
        , pulishedDate: this.model.pulishedDate, shortDescription: this.model.shortDescription,
        categores: this.selectedcategores ?? []
      };
      this.UpdateblogpostsSubsciption = this.UpdateblogpostsSubsciption = this.service.UpdateBlogposts(this.id, UpdateBlogpost).subscribe({
        next: (res) => {
          this.rout.navigateByUrl('/admin/blogposts')
        },
        error: err => { console.log(err) }
      })
    }
  }
  Delete(): void {
    if (this.id) {
      this.deleteblogposts = this.service.deleteblogposts(this.id).subscribe({
        next: (res) => {
          this.id = res.id
          this.rout.navigateByUrl('/admin/blogposts')
        }, error: err => console.log(err)
      })
    }
  }
  openImageSelector(): void {
    this.isImageSelectorVisible = true;
  }
  closeImageSelector(): void {
    this.isImageSelectorVisible = false
  }

  ngOnDestroy(): void {
    this.routerSubcription?.unsubscribe();
    this.UpdateblogpostsSubsciption?.unsubscribe();
    this.getblogpost?.unsubscribe();
    this.deleteblogposts?.unsubscribe();
    this.UpdateblogpostsSubsciption?.unsubscribe();
  }


}
