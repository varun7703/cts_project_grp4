import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './components/angular/angular.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { DatascienceComponent } from './components/datascience/datascience.component';
import { JavaComponent } from './components/java/java.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { LoginComponent } from './components/login/login.component';
import { PythonComponent } from './components/python/python.component';
import { RegisterComponent } from './components/register/register.component';
import { MostPopularComponent } from './components/shared/most-popular/most-popular.component';
import { MyAccComponent } from './components/shared/my-acc/my-acc.component';
import { MyOrdersComponent } from './components/shared/my-orders/my-orders.component';
import { NewReleasesComponent } from './components/shared/new-releases/new-releases.component';
import { ProductComponent } from './components/shared/product/product.component';
import { WishListComponent } from './components/shared/wish-list/wish-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { WebdevelopmentComponent } from './components/webdevelopment/webdevelopment.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'prodlist'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'mostpop', component: MostPopularComponent },
  { path: 'prodlist', component: ProductListComponent },
  { path: 'newrel', component: NewReleasesComponent },
  { path: 'java', component: JavaComponent },
  { path: 'webdev', component: WebdevelopmentComponent },
  { path: 'python', component: PythonComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'datasc', component: DatascienceComponent },
  { path: 'javasc', component: JavascriptComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'conforder/:id1', component: ConfirmOrderComponent },
  { path: 'wishlist', component: WishListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'myorder', component: MyOrdersComponent },
  { path: 'myacc', component: MyAccComponent },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
