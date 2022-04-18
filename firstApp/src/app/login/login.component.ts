import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User;
  constructor(private userService:UserService,
              private router:Router
    ) { 
    this.user = new User();
  }

  ngOnInit(): void {
  }
login(){
  var user = this.userService.login(this.user);
  console.log(user);
  if(user!=null)
  {
    alert("Welcome "+user.name);
    localStorage.setItem("uname",user.name);
    localStorage.setItem("urole",user.role);
    this.router.navigateByUrl("pizzas");
  }
}
reset(){
  this.user = new User();
}
}
