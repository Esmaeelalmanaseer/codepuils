import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BlogImage } from './Models/BlogImage.model';
import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
selectedimage:BehaviorSubject<BlogImage>=new BehaviorSubject<BlogImage>({
  fileExrenstion:'',filename:'',id:'',title:'',url:''
})


  constructor(private http:HttpClient) { }

  getAllImage():Observable<BlogImage[]>
  {
   return this.http.get<BlogImage[]>(environment.baseurl+'/api/BlogImage')
  }

  uploadImage(file:File,title:string,filename:string):Observable<BlogImage>
  {
       const formdata=new FormData();
       formdata.append('file',file)
       formdata.append('fileName',filename)
       formdata.append('title',title)
     return this.http.post<BlogImage>(environment.baseurl+'/api/BlogImage',formdata )
  }
  selectorImage(image:BlogImage):void
  {
     this.selectedimage.next(image);
  }
  OnselectImage():Observable<BlogImage>
  {
    return this.selectedimage.asObservable();
  }
}
