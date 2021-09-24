import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { PizzaOrderComponent } from './pizza-order/pizza-order.component';
import { PizzaComponent } from './pizza/pizza.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'pizza', component:PizzaComponent},
  {path:'pizzaOrder',component:PizzaOrderComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[HomeComponent,PizzaComponent]
