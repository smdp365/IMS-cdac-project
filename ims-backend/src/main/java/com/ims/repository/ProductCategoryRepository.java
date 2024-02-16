package com.ims.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ims.model.ProductCategory;

public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {

}
