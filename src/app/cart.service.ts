import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private cartItemsSubject = new BehaviorSubject<Product[]>(this.cartItems);
  private cartCountSubject = new BehaviorSubject<number>(0);
  private cartTotalSubject = new BehaviorSubject<number>(0);

  cartItems$ = this.cartItemsSubject.asObservable();
  cartCount$ = this.cartCountSubject.asObservable();
  cartTotal$ = this.cartTotalSubject.asObservable();

  addToCart(product: Product) {
    this.cartItems.push(product);
    this.updateCart();
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.updateCart();
  }

  clearCart() {
    this.cartItems = [];
    this.updateCart();
  }

  private updateCart() {
    const count = this.cartItems.length;
    const total = this.cartItems.reduce((acc, item) => acc + item.price, 0);

    this.cartItemsSubject.next(this.cartItems);
    this.cartCountSubject.next(count);
    this.cartTotalSubject.next(total);
  }
}
