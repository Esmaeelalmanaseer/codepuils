import { Component, OnDestroy } from '@angular/core';
import { categoryrequest } from '../../Models/Add-category-Requist.model';
import { CategoryService } from '../../Service/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {
  private addcategorysubcription?:Subscription

  model:categoryrequest

  constructor (private categoryservice:CategoryService) {
    this.model={
       name:'',
       urlHandler:''
    }
  }


  onformSubmit()
  {
    this.addcategorysubcription = this.categoryservice.addCategory(this.model).subscribe({
         next:(res)=>{
           console.log('Succefly');
         },
         error:(err)=>{ 
          console.log(err);
         }
        
     })
  }
  ngOnDestroy(): void {
    this.addcategorysubcription?.unsubscribe();
  }
}
