
import { Pizza } from "../models/pizza";

export class PizzaService{
  pizzas:Pizza[];

  constructor() {
     this.pizzas = [
         new Pizza(101,"Plain Cheeze",14.8,"assets/images/Pizza1.jpg"),
         new Pizza(102,"Cheese King",45.2,"assets/images/Pizza2.jpg")
     ] 
  }
  public addPizza(pizza:Pizza){
      this.pizzas.push(pizza);
  }
  public getPizzas(){
      return this.pizzas;
  }
  public getPizzaById(id:number){
      var pizza;
      for (let index = 0; index < this.pizzas.length; index++) {
          if(this.pizzas[index].id==id)
           pizza= this.pizzas[index];  
      }
      return pizza;  
  }
}