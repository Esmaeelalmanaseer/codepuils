import { Component, OnInit } from '@angular/core';
import { AuthService } from '../prudiction/Auth/Services/auth.service';
import { user } from '../prudiction/Auth/Models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  user?:user
  constructor(private authservice:AuthService,private router:Router)
  {

  }
  
  
  ngOnInit(): void {
    this.authservice.user().subscribe({
      next:(res)=>{
      this.user=res
      },error:err=>{console.log(err)}      
    })
   this.user=this.authservice.getUser();
  }
  onLogout():void
  {
  this.authservice.logout();
  this.router.navigateByUrl('/');
  }

}
