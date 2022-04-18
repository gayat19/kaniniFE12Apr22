import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-pic',
  templateUrl: './pizza-pic.component.html',
  styleUrls: ['./pizza-pic.component.css']
})
export class PizzaPicComponent implements OnInit {
id:number;
pizza:any;
  constructor(private pizzaService:PizzaService,
            private activatedRoute:ActivatedRoute,
            private router:Router ) 
        {
            this.id=this.activatedRoute.snapshot.params["pid"] as number;
            this.pizza = this.pizzaService.getPizzaById(this.id);
            console.log(this.pizza)
          }

  ngOnInit(): void {
  }
  goBack(){
    this.router.navigateByUrl("pizzas");
  }
}
