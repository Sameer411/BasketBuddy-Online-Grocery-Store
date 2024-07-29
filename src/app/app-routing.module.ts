import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopRecommendedComponent } from './top-recommended/top-recommended.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { DairyComponent } from './dairy/dairy.component';
import { SnacksComponent } from './snacks/snacks.component';
import { CheeseComponent } from './cheese/cheese.component';
import { BreadComponent } from './bread/bread.component';
import { CannedGoodsComponent } from './canned-goods/canned-goods.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'top-recommended', component: TopRecommendedComponent },
  { path: 'fruits', component: FruitsComponent },
  { path: 'vegetables', component: VegetablesComponent },
  { path: 'dairy', component: DairyComponent },
  { path: 'snacks', component: SnacksComponent },
  { path: 'cheese', component: CheeseComponent },
  { path: 'bread', component: BreadComponent },
  { path: 'canned-goods', component: CannedGoodsComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '' } // Redirect to home for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
