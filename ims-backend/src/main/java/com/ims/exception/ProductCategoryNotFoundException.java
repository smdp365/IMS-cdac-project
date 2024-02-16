package com.ims.exception;


public class ProductCategoryNotFoundException extends RuntimeException {
	public ProductCategoryNotFoundException(Long id) {
		super("Product Category with id " + id + " .... not found!!!");
	}

}
