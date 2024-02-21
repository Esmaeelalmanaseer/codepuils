import { Injectable } from '@angular/core';
import { loginRequist } from '../Models/login-requist.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { loginresponse } from '../Models/login-response.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { user } from '../Models/user.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $user=new BehaviorSubject<user | undefined>(undefined)
  constructor(private http:HttpClient,private cookieService:CookieService) { }
  login(requist:loginRequist):Observable<loginresponse>
  {
    return this.http.post<loginresponse>(environment.baseurl+'/api/Auth/LogIn',{email:requist.email,password:requist.password})
  }
  setUser(user:user):void
  {
    this.$user.next(user)
localStorage.setItem('user-email',user.email);
localStorage.setItem('roles',user.roles.join(','));

  }
  user():Observable<user|undefined>
  {
    return this.$user.asObservable();
  }
  getUser():user | undefined
  {
    const email=localStorage.getItem('user-email');
    const roles=localStorage.getItem('roles');
    if(email&&roles)
    {
      const user:user={
        email:email,
        roles:roles?.split(',')
      }
     return user
    }
    return undefined
  }

  logout():void
  {
    localStorage.clear();
    this.cookieService.delete('Authorization','/');
    this.$user.next(undefined);
  }
}
