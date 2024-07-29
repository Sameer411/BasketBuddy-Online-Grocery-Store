import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private allProducts: Product[] = [
    // Example products with image URLs and categories
    { id: 1, name: 'Top Pick Apple', description: 'Fresh apples, top pick of the month', price: 1.5, imageUrl: 'assets/images/apple.jpg', category: 'Top Recommended' },
    { id: 2, name: 'Top Pick Banana', description: 'Ripe bananas, top pick of the month', price: 0.7, imageUrl: 'assets/images/banana.jpg', category: 'Top Recommended' },
    { id: 3, name: 'Apple', description: 'Fresh apples', price: 1.2, imageUrl: 'assets/images/apple.jpg', category: 'Fruits' },
    { id: 4, name: 'Banana', description: 'Ripe bananas', price: 0.5, imageUrl: 'assets/images/banana.jpg', category: 'Fruits' },
    { id: 5, name: 'Orange', description: 'Juicy oranges', price: 1.0, imageUrl: 'assets/images/orange.jpg', category: 'Fruits' },
    { id: 6, name: 'Carrot', description: 'Crunchy carrots', price: 0.9, imageUrl: 'assets/images/carrot.jpg', category: 'Vegetables' },
    { id: 7, name: 'Broccoli', description: 'Fresh broccoli', price: 1.3, imageUrl: 'assets/images/broccoli.jpg', category: 'Vegetables' },
    { id: 8, name: 'Milk', description: 'Fresh milk', price: 1.2, imageUrl: 'assets/images/milk.jpg', category: 'Dairy' },
    { id: 9, name: 'Cheese', description: 'Cheddar cheese', price: 2.5, imageUrl: 'assets/images/cheese.jpg', category: 'Dairy' },
    { id: 10, name: 'Chips', description: 'Crispy potato chips', price: 1.8, imageUrl: 'assets/images/chips.jpg', category: 'Snacks' },
    { id: 11, name: 'Cookies', description: 'Delicious cookies', price: 2.0, imageUrl: 'assets/images/cookies.jpg', category: 'Snacks' },
    { id: 12, name: 'Gouda Cheese', description: 'Aged Gouda cheese', price: 3.0, imageUrl: 'assets/images/gouda.jpg', category: 'Cheese' },
    { id: 13, name: 'Brie Cheese', description: 'Creamy Brie cheese', price: 4.0, imageUrl: 'assets/images/brie.jpg', category: 'Cheese' },
    { id: 14, name: 'Whole Wheat Bread', description: 'Healthy whole wheat bread', price: 2.2, imageUrl: 'assets/images/wheat-bread.jpg', category: 'Bread' },
    { id: 15, name: 'Sourdough Bread', description: 'Fresh sourdough bread', price: 2.5, imageUrl: 'assets/images/sourdough.jpg', category: 'Bread' },
    { id: 16, name: 'Canned Beans', description: 'Canned kidney beans', price: 1.5, imageUrl: 'assets/images/canned-beans.jpg', category: 'Canned Goods' },
    { id: 17, name: 'Canned Corn', description: 'Canned sweet corn', price: 1.2, imageUrl: 'assets/images/canned-corn.jpg', category: 'Canned Goods' }
  ];

  getAllProducts(): Product[] {
    return this.allProducts;
  }

  getProductsByCategory(category: string): Product[] {
    return this.allProducts.filter(product => product.category === category);
  }

  getTopRecommendedProducts(): Product[] {
    return this.getProductsByCategory('Top Recommended');
  }

  getFruits(): Product[] {
    return this.getProductsByCategory('Fruits');
  }

  getVegetables(): Product[] {
    return this.getProductsByCategory('Vegetables');
  }

  getDairyProducts(): Product[] {
    return this.getProductsByCategory('Dairy');
  }

  getSnacks(): Product[] {
    return this.getProductsByCategory('Snacks');
  }

  getCheeseProducts(): Product[] {
    return this.getProductsByCategory('Cheese');
  }

  getBreadProducts(): Product[] {
    return this.getProductsByCategory('Bread');
  }

  getCannedGoods(): Product[] {
    return this.getProductsByCategory('Canned Goods');
  }

}
