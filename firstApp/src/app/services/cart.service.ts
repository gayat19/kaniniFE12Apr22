import { CartPizza } from "../models/cartPizza";

export class CartService{
itemsInCart:CartPizza[];

    constructor() {
    this.itemsInCart = [];  
    }
    public getCart(){
        return this.itemsInCart;
    }
    public addToCart(pizza:any){
        var flag=0;
     for (let index = 0; index < this.itemsInCart.length; index++) {
        if(pizza.id== this.itemsInCart[index].pizza.id)
        {
            flag=1;
            this.itemsInCart[index].quantity +=1;
            break;
        } 
     }
     if(flag==0)
     {
         var cartItem = new CartPizza();
         cartItem.pizza = pizza;
         cartItem.quantity = 1;
         this.itemsInCart.push(cartItem);
     }
    }
}