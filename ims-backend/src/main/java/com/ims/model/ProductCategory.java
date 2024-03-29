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
public class ProductCategory {
	@Id
	@GeneratedValue
	private Long categoryId;
	@NotBlank(message = "Category Name is mandatory")
	private String categoryName;


	public ProductCategory(Long id, String categoryName) {
		super();
		this.categoryId = id;
		this.categoryName = categoryName;
	}


	public Long getCategoryId() {
		return categoryId;
	}


	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}


	public String getCategoryName() {
		return categoryName;
	}


	public ProductCategory() {
		super();
		// TODO Auto-generated constructor stub
	}


	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	

}
