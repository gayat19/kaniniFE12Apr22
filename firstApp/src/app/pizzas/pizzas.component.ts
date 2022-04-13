import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../models/pizza';
import { CartService } from '../services/cart.service';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
  pizzas:Pizza[];
count:number;
  constructor(private pizzaService:PizzaService,
              private cartService:CartService,
              private router:Router
    ) {
    this.pizzas = this.pizzaService.getPizzas();
    this.count = this.cartService.getCart().length;
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
}
