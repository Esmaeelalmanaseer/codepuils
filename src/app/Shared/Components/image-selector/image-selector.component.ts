import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageServiceService } from './image-service.service';
import { Observable } from 'rxjs';
import { BlogImage } from './Models/BlogImage.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css']
})
export class ImageSelectorComponent implements OnInit {

  constructor(private service: ImageServiceService) {

  }
  @ViewChild('form', { static: false }) imageUploadForm?: NgForm
  private file?: File;
  filename: string = '';
  title: string = '';
  images$?: Observable<BlogImage[]>
  ngOnInit(): void {
    this.getImages();
  }
  OnFileUploadChange(event: Event): void {
    const elemnt = event.currentTarget as HTMLInputElement;
    this.file = elemnt.files?.[0];
  }
  UploadImage(): void {
    if (this.file && this.title !== '' && this.filename !== '') {
      this.service.uploadImage(this.file, this.title, this.filename).subscribe({
        next: (res) => {
          this.imageUploadForm?.resetForm();
          this.getImages();
        },
        error: err => { console.log(err) }
      })
    }
  }
  private getImages() {
    this.images$ = this.service.getAllImage()
  }
  selectImage(image:BlogImage): void {
 this.service.selectorImage(image);
  }
}
