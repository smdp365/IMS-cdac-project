package com.ims.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ims.model.Product;
import com.ims.model.Sell;
import com.ims.repository.ProductRepository;

import jakarta.transaction.Transactional;

@Service
public class SaleService {

    @Autowired
    private ProductRepository productRepository;


    @Transactional
    public boolean processSale(List <Sell> body) {

    	body.forEach(item -> {

            // Retrieve the product from the database
            Product product = productRepository.findById(item.getId())
                    .orElseThrow(() -> new RuntimeException("Product not found" + item.getId()));

            // Verify product availability
            if (product.getQuantity() < item.getQuantity()) {
                throw new RuntimeException("Insufficient stock for the product");
            } 
            // Update product quantity
            product.setQuantity(product.getQuantity() - item.getQuantity());


            // Record the sale (You may implement this as per your application's requirements)

            // Update inventory
            product = productRepository.save(product);

            // Optionally, generate invoice/receipt and notify the customer
    	});
       
        return true; // Sale processed successfully
    }
    
    
}

