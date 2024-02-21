import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Addblogposts } from '../Model/add-blogpost.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { blogpostmodel } from '../Model/blogpost.model';
import { UpdateBlogpost } from '../Model/Update-blogposts.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPostServiceService {

  constructor(private http:HttpClient) { }

  createblogposts(model:Addblogposts):Observable<blogpostmodel>
  {
    return this.http.post<blogpostmodel>(environment.baseurl+'/api/BlogPost',model)
  }
  GetAllblogposts():Observable<blogpostmodel[]>
  {
    return this.http.get<blogpostmodel[]>(environment.baseurl+'/api/BlogPost')
  }
  getblogpostbyId(id:string):Observable<blogpostmodel>
  {
    return this.http.get<blogpostmodel>(environment.baseurl+'/api/BlogPost/'+id)
  }
  getByUrlHandle(urlHandle:string):Observable<blogpostmodel>
  {
    return this.http.get<blogpostmodel>(environment.baseurl+'/api/BlogPost/'+urlHandle)
  }
 UpdateBlogposts(id:string,model:UpdateBlogpost):Observable<blogpostmodel>
 {
  return this.http.put<blogpostmodel>(environment.baseurl+'/api/BlogPost/'+id,model)
 }
 deleteblogposts(id:string):Observable<blogpostmodel>
 {
  return this.http.delete<blogpostmodel>(environment.baseurl+('/api/BlogPost/'+id))
 }
}
