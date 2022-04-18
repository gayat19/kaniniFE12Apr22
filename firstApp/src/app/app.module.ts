import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { PizzaService } from './services/pizza.service';
import { CartService } from './services/cart.service';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { PizzaPicComponent } from './pizza-pic/pizza-pic.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PizzasComponent,
    OrdersComponent,
    CartComponent,
    LoginComponent,
    PizzaPicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PizzaService,CartService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
