import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';

import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { MyOrdersComponent } from './components/shared/my-orders/my-orders.component';
import { ProductComponent } from './components/shared/product/product.component';
import { MyAccComponent } from './components/shared/my-acc/my-acc.component';
import { WishListComponent } from './components/shared/wish-list/wish-list.component';
import { MostPopularComponent } from './components/shared/most-popular/most-popular.component';
import { NewReleasesComponent } from './components/shared/new-releases/new-releases.component';
import { AutherChoiceComponent } from './components/shared/auther-choice/auther-choice.component';
import { MiscComponent } from './components/shared/misc/misc.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularComponent } from './components/angular/angular.component';
import { DatascienceComponent } from './components/datascience/datascience.component';
import { JavaComponent } from './components/java/java.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { PythonComponent } from './components/python/python.component';
import { WebdevelopmentComponent } from './components/webdevelopment/webdevelopment.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    PageNotFoundComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    
    ProductItemComponent,
    MyOrdersComponent,
    ProductComponent,
    MyAccComponent,
    WishListComponent,
    MostPopularComponent,
    NewReleasesComponent,
    AutherChoiceComponent,
    MiscComponent,
    LoginComponent,
    RegisterComponent,
    AngularComponent,
    DatascienceComponent,
    JavaComponent,
    JavascriptComponent,
    PythonComponent,
    WebdevelopmentComponent,
    ConfirmOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
