import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { TopRecommendedComponent } from './top-recommended/top-recommended.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { DairyComponent } from './dairy/dairy.component';
import { SnacksComponent } from './snacks/snacks.component';
import { CheeseComponent } from './cheese/cheese.component';
import { BreadComponent } from './bread/bread.component';
import { CannedGoodsComponent } from './canned-goods/canned-goods.component';
import { ProductService } from './product.service';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TopRecommendedComponent,
    FruitsComponent,
    VegetablesComponent,
    DairyComponent,
    SnacksComponent,
    CheeseComponent,
    BreadComponent,
    CannedGoodsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
