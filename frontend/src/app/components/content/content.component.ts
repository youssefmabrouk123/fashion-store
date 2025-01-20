import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/Services/product.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  //  products: Product[] = [
  //   {
  //     id: 1,
  //     name: "Active Wear",
  //     price: 25.00,
  //     rating: 4.8,
  //     comments: 36,
  //     brand: "Easy Wear",
  //     availableColors: ["White", "Black"],
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.",
  //     images: [
  //       "assets/img/product_single_10.jpg",
  //       "assets/img/product_single_01.jpg",
  //       "assets/img/product_single_02.jpg",
  //       "assets/img/product_single_03.jpg",
  //       "assets/img/product_single_04.jpg",
  //       "assets/img/product_single_05.jpg",
  //       "assets/img/product_single_06.jpg",
  //       "assets/img/product_single_07.jpg",
  //       "assets/img/product_single_08.jpg",
  //       "assets/img/product_single_09.jpg"
  //     ],
  //     specifications: [
  //       "Lorem ipsum dolor sit",
  //       "Amet, consectetur",
  //       "Adipiscing elit, set",
  //       "Duis aute irure",
  //       "Ut enim ad minim",
  //       "Dolore magna aliqua",
  //       "Excepteur sint"
  //     ],
  //     sizes: ["S", "M", "L", "XL"]
  //   },
  //   {
  //     id: 2,
  //     name: "Casual Shoes",
  //     price: 45.00,
  //     rating: 4.5,
  //     comments: 20,
  //     brand: "FootStep",
  //     availableColors: ["Blue", "Black"],
  //     description: "Comfortable casual shoes for everyday wear. Made with premium materials for long-lasting durability.",
  //     images: [
  //       "assets/img/product_single_11.jpg",
  //       "assets/img/product_single_12.jpg",
  //       "assets/img/product_single_13.jpg",
  //       "assets/img/product_single_14.jpg"
  //     ],
  //     specifications: [
  //       "Soft leather upper",
  //       "Durable rubber sole",
  //       "Breathable design",
  //       "Available in multiple sizes"
  //     ],
  //     sizes: ["6", "7", "8", "9", "10"]
  //   },
  //   {
  //     id: 3,
  //     name: "Sport Jacket",
  //     price: 55.00,
  //     rating: 4.7,
  //     comments: 42,
  //     brand: "FitWear",
  //     availableColors: ["Red", "Black", "Blue"],
  //     description: "A lightweight, breathable jacket perfect for outdoor activities or casual wear.",
  //     images: [
  //       "assets/img/product_single_15.jpg",
  //       "assets/img/product_single_16.jpg",
  //       "assets/img/product_single_17.jpg"
  //     ],
  //     specifications: [
  //       "Water-resistant fabric",
  //       "Zippered pockets",
  //       "Reflective details",
  //       "Available in multiple colors"
  //     ],
  //     sizes: ["S", "M", "L", "XL"]
  //   }]
  products: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

    // Load all products
    loadProducts(): void {
      this.productService.getAllProducts().subscribe((data) => {
        this.products = data;
        console.log(data);
      });
    }

    // products: Product[] = PRODUCTS;

    likeProduct(productId: number): void {
      this.productService.markAsLiked(productId).subscribe(
        (response) => {
          console.log(`Product ${productId} liked successfully:`, response);
          // Optionally, update the UI to reflect the like action

          alert("product added successfully")
        },
        (error) => {
          console.error(`Error liking product ${productId}:`, error);
        }
      );
    }

    
}
