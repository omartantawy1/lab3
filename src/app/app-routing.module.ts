import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [

  {
    path: " ",
    component: ProductsListComponent
  },
  {
    path: 'game-details/:id',
    component: ProductDetailsComponent
  },
  
  {
    path:'register',
    component:RegisterComponent
  },

  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'cart',
    component:CartComponent
  },

  {
    path: '**',
    component: NotFoundComponent
  },
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
