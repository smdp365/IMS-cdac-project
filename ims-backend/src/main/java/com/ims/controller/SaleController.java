package com.ims.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ims.model.Sell;
import com.ims.service.SaleService;

@RestController
public class SaleController {

    @Autowired
    private SaleService productService;

    @PostMapping(value = "/sale", consumes = "application/json")
//    @RequestMapping(consumes = )
    public ResponseEntity<String> sellProduct(@RequestBody List <Sell> body) {
    	
       // Logic to process the sale
        
//    	Long id = product.getId();	
//    	int quantity = product.getQuantity();
    	
    	productService.processSale(body);
    	
    	
        // Update product quantity after sale
//        productService.updateProductQuantity(productId, quantity);
        
        return ResponseEntity.ok("Product sold successfully");
    }
    

}

