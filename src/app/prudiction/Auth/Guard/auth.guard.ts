import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../Services/auth.service';
import { jwtDecode } from 'jwt-decode';
export const authGuard: CanActivateFn = (route, state) => {
  const cookieService=inject(CookieService)
  const authservice=inject(AuthService)
  const router=inject(Router)
  const user=authservice.getUser();
  //check for jwt Token
  let Token=cookieService.get('Authorization');
  
  if(Token&&user)
  {
    Token=Token.replace('Bearer ','')
  const decodedToken:any=jwtDecode(Token);
  const expirationDate=decodedToken.exp*1000;
  const currentTime=new Date().getTime()
  if(expirationDate<currentTime)
  {
     //logout
     authservice.logout();
     return router.createUrlTree(['/login',{queryParams:{returnurl:state.url}}])
  }
  else
  {
    //Token is still vaild
    if(user.roles.includes('Writer'))
    {
      return true
    }else
    {
      alert('Unauthorize')
      return false
    }
  }

  }else
  {
    //logout
    authservice.logout();
    return router.createUrlTree(['/login',{queryParams:{returnurl:state.url}}])
  }

};
