package com.back.Zay.Repository;

import com.back.Zay.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByLiked(boolean liked);
}
