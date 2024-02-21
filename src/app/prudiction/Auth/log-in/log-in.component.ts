import { Component } from '@angular/core';
import { loginRequist } from '../Models/login-requist.model';
import { AuthService } from '../Services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
Model:loginRequist
constructor(private servicelogin:AuthService,private cookieservice:CookieService,private router:Router)
{
  this.Model={email:'',password:''}
};
OnFormSubmit()
{
  this.servicelogin.login(this.Model).subscribe({
    next:(res)=>{
     //set auth cookie
    this.cookieservice.set('Authorization','Bearer '+res.toekn,undefined,'/',undefined,true,'Strict');
    //set User
    this.servicelogin.setUser({
      email:res.email,
      roles:res.roles
    });

    //Redirect back to Home Page
    this.router.navigateByUrl('/')
    },
    error:err=>{
      console.log(err);
    }
  })
}
}
