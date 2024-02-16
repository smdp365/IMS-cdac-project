package com.ims.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Product {
	@Id
	@GeneratedValue
	private Long Id;
	@NotBlank(message = "Product Name is mandatory")
	private String productName;
	private double pricePerProduct;
	private int quantity;

	private Long categoryId;


	public Product(Long id, String productName, double pricePerProduct, int quantity, Long categoryId) {
		super();
		Id = id;
		this.productName = productName;
		this.pricePerProduct = pricePerProduct;
		this.quantity = quantity;
		this.categoryId = categoryId;
	}

	
}
