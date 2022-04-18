import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../models/pizza';
import { User } from '../models/user';
import { CartService } from '../services/cart.service';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
  pizzas:Pizza[];
  user:any;
count:number;
  constructor(private pizzaService:PizzaService,
              private cartService:CartService,
              private router:Router
    ) {
    this.pizzas = this.pizzaService.getPizzas();
    this.count = this.cartService.getCart().length;
    
    this.getUserData();
   }
  getUserData() {
      var username=  localStorage.getItem("uname");
      if(username != undefined){
        this.user = new User();
        this.user.name = username;
        this.user.role = localStorage.getItem("role")??"";
      }
    }

  ngOnInit(): void {
  }
  like(id:any){
    this.pizzaService.incrementLike(id);
  }
  buy(id:any){
    var pizza = this.pizzaService.getPizzaById(id);
    this.cartService.addToCart(pizza);
    console.log(this.cartService.getCart());
    this.count = this.cartService.getCart().length;
  }
  goToCart(){
    this.router.navigateByUrl("cart");
  }
  showPic(id:any){
    this.router.navigateByUrl("pic/"+id);
  }
}

  

