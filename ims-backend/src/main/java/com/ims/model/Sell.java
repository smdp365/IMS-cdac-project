package com.ims.model;

public class Sell {
	private Long id;
    private int quantity;
	public Sell() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Sell(Long id, int quantity) {
		super();
		this.id = id;
		this.quantity = quantity;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
}
