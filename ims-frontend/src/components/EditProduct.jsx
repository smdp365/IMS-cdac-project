import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "../css/EditProduct.module.css";

export default function EditProduct() {
    let navigate = useNavigate();
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const [product, setProduct] = useState({
        productName: "",
        pricePerProduct: "",
        quantity: "",
        categoryId: "",
    });

    useEffect(() => {
        loadProduct();
    }, []);

    const onInputChange = (evt) => {
        setProduct({ ...product, [evt.target.name]: evt.target.value });
    };

    const onSubmit = async (data) => {
        try {
            await axios.put(`http://localhost:8080/product/${id}`, data);
            navigate("/products");
            alert("Product details has been updated successfully.......");
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    const loadProduct = async () => {
        const result = await axios.get(`http://localhost:8080/product/${id}`);
        setProduct(result.data);

        // Set form values after loading product data
        setValue("productName", result.data.productName);
        setValue("pricePerProduct", result.data.pricePerProduct);
        setValue("quantity", result.data.quantity);
        setValue("categoryId", result.data.categoryId);
    };

    return (
        <div className={`${styles.container}`}>
            <div className="row">
                <div
                    className={`col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ${styles.empForm}`}
                >
                    <h2 className="text-center m-3">Edit Product</h2>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label
                                htmlFor="productName"
                                className="form-label"
                            ></label>
                            <input
                                type="text"
                                className={`form-control ${
                                    styles.empFormField
                                } ${errors.productName ? "is-invalid" : ""}`}
                                placeholder="Enter product name"
                                name="productName"
                                {...register("productName", {
                                    required: "Product name is required",
                                    pattern: {
                                        value: /^[A-Za-z ]+$/,
                                        message: "Invalid Product",
                                    },
                                })}
                                onChange={(evt) => onInputChange(evt)}
                            />
                            {errors.productName && (
                                <div className="invalid-feedback">
                                    {errors.productName.message}
                                </div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="pricePerProduct"
                                className="form-label"
                            ></label>
                            <input
                                type="text"
                                className={`form-control ${
                                    styles.empFormField
                                } ${
                                    errors.pricePerProduct ? "is-invalid" : ""
                                }`}
                                placeholder="Enter Price Per Product"
                                name="pricePerProduct"
                                {...register("pricePerProduct", {
                                    required: "Unit price is required",
                                    pattern: {
                                        value: /^\d+$/,
                                        message: "Invalid Value",
                                    },
                                })}
                                onChange={(evt) => onInputChange(evt)}
                            />
                            {errors.pricePerProduct && (
                                <div className="invalid-feedback">
                                    {errors.pricePerProduct.message}
                                </div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="quantity"
                                className="form-label"
                            ></label>
                            <input
                                type="text"
                                className={`form-control ${
                                    styles.empFormField
                                } ${errors.quantity ? "is-invalid" : ""}`}
                                placeholder="Enter Quantity"
                                name="quantity"
                                {...register("quantity", {
                                    required: "Quantity is required",
                                    pattern: {
                                        value: /^\d+$/,
                                        message: "Invalid Quantity.",
                                    },
                                })}
                                onChange={(evt) => onInputChange(evt)}
                            />
                            {errors.quantity && (
                                <div className="invalid-feedback">
                                    {errors.quantity.message}
                                </div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="categoryId"
                                className="form-label"
                            ></label>
                            <input
                                type="text"
                                className={`form-control ${
                                    styles.empFormField
                                } ${errors.categoryId ? "is-invalid" : ""}`}
                                placeholder="Enter Category Id"
                                name="categoryId"
                                {...register("categoryId", {
                                    required: "Category Id is required",
                                    pattern: {
                                        value: /^\d{10}$/,
                                        message: "Invalid Category Id",
                                    },
                                })}
                                onChange={(evt) => onInputChange(evt)}
                            />
                            {errors.categoryId && (
                                <div className="invalid-feedback">
                                    {errors.categoryId.message}
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className={`btn ${styles.Btn}`}
                            style={{ marginRight: "40px" }}
                        >
                            &#10004;
                        </button>
                        <Link
                            className={`btn m-2 ${styles.Btn}`}
                            to="/products"
                        >
                            &#10006;
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
