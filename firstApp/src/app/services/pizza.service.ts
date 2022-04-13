
import { Pizza } from "../models/pizza";

export class PizzaService{
  pizzas:Pizza[];

  constructor() {
     this.pizzas = [
         new Pizza(101,"Plain Cheeze",14.8,"assets/images/Pizza1.jpg",0),
         new Pizza(102,"Cheese King",45.2,"assets/images/Pizza2.jpg",0)
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
  public incrementLike(id:number){
    for (let index = 0; index < this.pizzas.length; index++) {
        if(this.pizzas[index].id==id)
        {
            this.pizzas[index].likes= (this.pizzas[index].likes??0)+1;
            break;
        }
        
    }
  
  }
}