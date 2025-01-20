package com.back.Zay.Service;


import com.back.Zay.Entity.Product;

import java.util.List;

public interface ProductService {
    Product saveProduct(Product product);
    List<Product> getAllProducts();
    Product getProductById(Long id);
    Product markAsLiked(Long id);
    List<Product> getLikedProducts();
    Product unlikeProduct(Long id);

}
