import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-canned-goods',
  templateUrl: './canned-goods.component.html',
  styleUrls: ['./canned-goods.component.scss']
})
export class CannedGoodsComponent implements OnInit {
  cannedGoods: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.cannedGoods = this.productService.getCannedGoods();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
