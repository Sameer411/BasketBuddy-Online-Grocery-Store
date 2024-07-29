import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-recommended',
  templateUrl: './top-recommended.component.html',
  styleUrls: ['./top-recommended.component.scss']
})
export class TopRecommendedComponent implements OnInit {
  topRecommended: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.topRecommended = this.productService.getTopRecommendedProducts();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
