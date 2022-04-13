import { Component, OnInit } from '@angular/core';
import { CartPizza } from '../models/cartPizza';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart:CartPizza[];
  constructor(private cartService:CartService) {
    this.cart = this.cartService.getCart();
   }

  ngOnInit(): void {
  }

}
