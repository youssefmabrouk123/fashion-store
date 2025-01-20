package com.back.Zay.Service;

import com.back.Zay.Entity.Product;
import com.back.Zay.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    @Override
    public Product markAsLiked(Long id) {
        Product product = productRepository.findById(id).orElse(null);
        if (product != null) {
            product.setLiked(true);
            return productRepository.save(product);
        }
        return null;
    }


    public List<Product> getLikedProducts() {
        return productRepository.findByLiked(true);
    }

    public Product unlikeProduct(Long id) {
        Optional<Product> productOptional = productRepository.findById(id);
        if (productOptional.isPresent()) {
            Product product = productOptional.get();
            product.setLiked(false);
            return productRepository.save(product);
        } else {
            throw new RuntimeException("Product not found with id: " + id);
        }
    }
}