package com.ims.controller;

import java.util.List;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ims.exception.ProductCategoryNotFoundException;
import com.ims.model.ProductCategory;
import com.ims.repository.ProductCategoryRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin("http://localhost:5174")
public class ProductCategoryController {
	
	@Autowired
	private ProductCategoryRepository productCategoryRepository;
	
	@PostMapping("/productcategory")
    ProductCategory addProductCategory(@Valid @RequestBody ProductCategory newProductCategory){
		newProductCategory.setCategoryId(null);
        return productCategoryRepository.save(newProductCategory);
    }
	
	
	@GetMapping("/allcategory")
	List<ProductCategory> getAllProductCategory(){
		return productCategoryRepository.findAll();
	}
	
	@GetMapping("/productcategory/{id}")
	ProductCategory getProductCategoryById(@PathVariable Long id) {
		return productCategoryRepository.findById(id)
				.orElseThrow(()-> new ProductCategoryNotFoundException(id));
	}
	
	
	@PutMapping("/productcategory/{id}")
	ProductCategory updateProductCategory(@RequestBody ProductCategory newProductCategory, @PathVariable Long id) {
		return productCategoryRepository.findById(id)
				.map(productCategory->{
					productCategory.setCategoryName(newProductCategory.getCategoryName());
					return productCategoryRepository.save(productCategory);
				}).orElseThrow(()-> new ProductCategoryNotFoundException(id));
	}
	
	
	@DeleteMapping("/productcategory/{id}")
	String deleteProductCategoryById(@PathVariable Long id) {
		if(!productCategoryRepository.existsById(id)) {
			throw new ProductCategoryNotFoundException(id);
		}
		
		productCategoryRepository.deleteById(id);
		return "MySuccessfulMessage: successfully deleted ProductCategory with id" + id + " .";
	}
}
