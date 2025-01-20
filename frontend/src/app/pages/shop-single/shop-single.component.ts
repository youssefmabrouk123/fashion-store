import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-shop-single',
  templateUrl: './shop-single.component.html',
  styleUrls: ['./shop-single.component.css'],
})
export class ShopSingleComponent implements OnInit {
  product!: Product; // Holds the product details
  selectedSize!: string; // Tracks selected size
  productId!: number; // Tracks the product ID

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Retrieve product ID from the route and assign it to the class-level property
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    // Load the product details
    this.loadProduct();
  }

  selectSize(size: string): void {
    this.selectedSize = size; // Set the selected size
  }

  loadProduct(): void {
    // Use the class-level productId
    this.productService.getProductById(this.productId).subscribe((data) => {
      this.product = data;
      console.log(data);
    });
  }
}
