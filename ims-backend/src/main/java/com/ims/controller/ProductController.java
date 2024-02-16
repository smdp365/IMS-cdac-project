package com.ims.controller;

import com.ims.exception.ProductCategoryNotFoundException;
import com.ims.exception.ProductNotFoundException;
import com.ims.model.Product;
import com.ims.repository.ProductCategoryRepository;
import com.ims.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static java.util.Objects.requireNonNull;

@RestController
@CrossOrigin("http://localhost:5173")
public class ProductController {
	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private ProductCategoryRepository productCategoryRepository;

	@PostMapping("/product")
    Product addProduct(@RequestBody Product newProduct){
		newProduct.setId(null);

		//validating productCategoryID
		requireNonNull(newProduct.getCategoryId(), "categoryId is mandatory");
		productCategoryRepository.findById(newProduct.getCategoryId())
				.orElseThrow(()->new ProductCategoryNotFoundException(newProduct.getCategoryId()));
        return productRepository.save(newProduct);
    }
	
	
	@GetMapping("/allproduct")
	List<Product> getAllProduct(){
		return productRepository.findAll();
	}
	
	@GetMapping("/product/{id}")
	Product getProductById(@PathVariable Long id) {
		return productRepository.findById(id)
				.orElseThrow(()-> new ProductNotFoundException(id));
	}
	
	
	@PutMapping("/product/{id}")
	Product updateProduct(@RequestBody Product newProduct, @PathVariable Long id) {
		return productRepository.findById(id)
				.map(product->{
					product.setProductName(newProduct.getProductName());
					product.setPricePerProduct(newProduct.getPricePerProduct());
					product.setQuantity(newProduct.getQuantity());
					product.setCategoryId(newProduct.getCategoryId());
					return productRepository.save(product);
				}).orElseThrow(()-> new ProductNotFoundException(id));
	}
	
	
	@DeleteMapping("/product/{id}")
	String deleteProductCategoryById(@PathVariable Long id) {
		if(!productRepository.existsById(id)) {
			throw new ProductNotFoundException(id);
		}
		
		productRepository.deleteById(id);
		return "MySuccessfulMessage: successfully deleted Product with id" + id + " .";
	}
}
