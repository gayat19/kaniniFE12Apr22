import { Pizza } from "./pizza";

export class CartPizza{
public pizza:Pizza;
public quantity:number;

constructor() {
   this.pizza = new Pizza();
   this.quantity = 0;
}
   
}