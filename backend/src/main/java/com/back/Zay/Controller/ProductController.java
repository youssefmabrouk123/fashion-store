package com.back.Zay.Controller;

import com.back.Zay.Entity.Product;
import com.back.Zay.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        Product savedProduct = productService.saveProduct(product);
        return ResponseEntity.ok(savedProduct);
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = productService.getProductById(id);
        if (product == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(product);
    }

    @PutMapping("/{id}/like")
    public ResponseEntity<Product> markAsLiked(@PathVariable Long id) {
        Product product = productService.markAsLiked(id);
        if (product == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(product);
    }

    // API to get all liked products
    @GetMapping("/liked")
    public ResponseEntity<List<Product>> getLikedProducts() {
        return ResponseEntity.ok(productService.getLikedProducts());
    }

    // API to unlike a product
    @PutMapping("/{id}/unlike")
    public ResponseEntity<Product> unlikeProduct(@PathVariable Long id) {
        try {
            Product updatedProduct = productService.unlikeProduct(id);
            return ResponseEntity.ok(updatedProduct);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}