import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products'; // Adjust this URL based on your backend configuration

  constructor(private http: HttpClient) {}

  // Add a new product
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}`, product);
  }

  // Get all products
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}`);
  }

  // Get a product by ID
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  // Mark a product as liked
  markAsLiked(id: number): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${id}/like`,{});
  }

  // Get all liked products
  getLikedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/liked`);
  }

  // Unlike a product
  unlikeProduct(id: number): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${id}/unlike`,{});
  }
}
