import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import { FormulaireComponent } from './Admin/formulaire/formulaire.component';

const routes: Routes = [
  { path: 'admin', component: AdminPageComponent },
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component: CartPageComponent},
   {path:'login', component: LoginPageComponent},
   {path:'register', component: RegisterPageComponent},
   {path:'from', component: FormulaireComponent},
  // {path:'checkout', component: CheckoutPageComponent, canActivate:[AuthGuard]},
  // {path:'payment', component: PaymentPageComponent, canActivate:[AuthGuard]},
  // {path:'track/:orderId', component: OrderTrackPageComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
