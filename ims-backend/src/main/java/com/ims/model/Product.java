package com.ims.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
//@Getter
//@Setter
//@NoArgsConstructor
public class Product {
	@Id
	@GeneratedValue
	private Long Id;
	@NotBlank(message = "Product Name is mandatory")
	private String productName;
	private double pricePerProduct;
	private int quantity;

	private Long categoryId;


	public Long getId() {
		return Id;
	}


	public void setId(Long id) {
		Id = id;
	}


	public String getProductName() {
		return productName;
	}


	public void setProductName(String productName) {
		this.productName = productName;
	}


	public double getPricePerProduct() {
		return pricePerProduct;
	}


	public void setPricePerProduct(double pricePerProduct) {
		this.pricePerProduct = pricePerProduct;
	}


	public int getQuantity() {
		return quantity;
	}


	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	public Long getCategoryId() {
		return categoryId;
	}


	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}



	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Product(Long id, String productName, double pricePerProduct, int quantity, Long categoryId) {
		super();
		Id = id;
		this.productName = productName;
		this.pricePerProduct = pricePerProduct;
		this.quantity = quantity;
		this.categoryId = categoryId;
	}

	
}
