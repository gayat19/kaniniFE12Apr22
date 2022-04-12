import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { PizzasComponent } from './pizzas/pizzas.component';

const routes: Routes = [
  {path:'pizzas',component:PizzasComponent},
  {path:'cart',component:CartComponent},
  {path:'orders',component:OrdersComponent},
  {path:'home',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
