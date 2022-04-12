import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:string;

  changeClass:string;
  constructor() {
    this.name = "Jimmy";
    this.changeClass = 'far fa-heart';
   }
   change(){
     if(this.changeClass=='fas fa-heart')
       this.changeClass = 'far fa-heart';
      else
       this.changeClass = 'fas fa-heart';
   }
   updateName(uname:any){
     this.name = uname;
   }
  ngOnInit(): void {
  }

}
