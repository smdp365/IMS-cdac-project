package com.ims.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ims.model.Product;
import com.ims.repository.ProductRepository;

import jakarta.transaction.Transactional;

@Service
public class SaleService {

    @Autowired
    private ProductRepository productRepository;

    @Transactional
    public boolean processSale(Long Id, int quantity) {
        // Retrieve the product from the database
        Product product = productRepository.findById(Id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        // Verify product availability
        if (product.getQuantity() < quantity) {
            throw new RuntimeException("Insufficient stock for the product");
        }

        // Calculate total price
        double totalPrice = product.getPricePerProduct() * quantity;

        // Update product quantity
        product.setQuantity(product.getQuantity() - quantity);

        // Record the sale (You may implement this as per your application's requirements)

        // Update inventory
        productRepository.save(product);

        // Optionally, generate invoice/receipt and notify the customer

        return true; // Sale processed successfully
    }
}

