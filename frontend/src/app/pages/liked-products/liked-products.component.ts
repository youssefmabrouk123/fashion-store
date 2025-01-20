import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/interfaces/product';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-liked-products',
  templateUrl: './liked-products.component.html',
  styleUrls: ['./liked-products.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.9)' })),
      ]),
    ]),
  ],
})
export class LikedProductsComponent implements OnInit {
  likedProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadLikedProducts();
  }

  loadLikedProducts(): void {
    this.productService.getLikedProducts().subscribe((data) => {
      this.likedProducts = data;
      console.log(this.likedProducts);
    });
  }

  unlikeProduct(productId: number): void {
    this.productService.unlikeProduct(productId).subscribe(
      (response) => {
        this.likedProducts = this.likedProducts.filter(
          (product) => product.id !== productId
        );
        console.log('Product unliked', response);
      },
      (error) => {
        console.error('Error unliking product', error);
      }
    );
  }
}
