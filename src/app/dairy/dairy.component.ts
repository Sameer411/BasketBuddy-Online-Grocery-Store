import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-dairy',
  templateUrl: './dairy.component.html',
  styleUrls: ['./dairy.component.scss']
})
export class DairyComponent implements OnInit {
  dairyProducts: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.dairyProducts = this.productService.getDairyProducts();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
