import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../Service/category.service';
import { categorymodel } from '../../Models/category.model';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
constructor (private service:CategoryService) {
  
}
categories?:categorymodel[];
  ngOnInit(): void {
  this.service.getAllcategory().subscribe({
    next:(res)=>{
     this.categories=res;
    },
    error:err=>{console.log(err)}
  });

  }

}
