import { Injectable } from '@angular/core';
import { categoryrequest } from '../Models/Add-category-Requist.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { categorymodel } from '../Models/category.model';
import { environment } from 'src/environments/environment.development';
import { UpdateCategoryRequist } from '../Models/Update-category-Requist';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient,private cookisService:CookieService) { }

  addCategory(model:categoryrequest) : Observable<void>
  {
   return this.http.post<void>(environment.baseurl+'/api/Categories?addAuth=true',model)
  }

  getAllcategory():Observable<categorymodel[]>
  {
    return this.http.get<categorymodel[]>(environment.baseurl+'/api/Categories')
  }

  getbyid(id:string):Observable<categorymodel>
  {
    return this.http.get<categorymodel>(environment.baseurl+'/api/Categories/'+id)
  }

  updateCategory(id:string,model:UpdateCategoryRequist):Observable<categorymodel>
  {
    return this.http.put<categorymodel>(environment.baseurl+'/api/Categories?addAuth=true/'+id+'?addAuth=true',model);
  }

  delteCategory(id:string):Observable<categorymodel>
  {
    return this.http.delete<categorymodel>(environment.baseurl+('/api/Categories/'+id+'?addAuth=true'));
  }

}
