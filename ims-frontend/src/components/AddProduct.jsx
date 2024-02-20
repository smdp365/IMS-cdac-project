import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "../css/AddProduct.module.css";

export default function AddProduct() {
    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmitFun = async (data) => {
        try {
            await axios.post("http://localhost:8080/product", data);
            navigate("/products");
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className={`${styles.container}`}>
            <div className={`row`}>
                <div
                    className={`col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ${styles.empForm}`}
                >
                    <h2 className="text-center m-3">Add Product</h2>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmitFun)}>
                        <div className={`mb-3`}>
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
                                {...register("productName", {
                                    required: "Product name is required",
                                    pattern: {
                                        value: /^[A-Za-z0-9 ]+$/,
                                        message:
                                            "Invalid characters. Only letters are allowed.",
                                    },
                                })}
                            />
                            {errors.productName && (
                                <div className="invalid-feedback">
                                    {errors.productName.message}
                                </div>
                            )}
                        </div>

                        <div className={`mb-3 `}>
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
                                placeholder="Enter Price Per Item"
                                {...register("pricePerProduct", {
                                    required: "Unit price is required",
                                    pattern: {
                                        value: /^\d+$/,
                                        message: "Invalid value",
                                    },
                                })}
                            />
                            {errors.pricePerProduct && (
                                <div className="invalid-feedback">
                                    {errors.pricePerProduct.message}
                                </div>
                            )}
                        </div>

                        <div className={`mb-3 `}>
                            <label
                                htmlFor="quantity"
                                className="form-label"
                            ></label>
                            <input
                                type="text"
                                className={`form-control ${
                                    styles.empFormField
                                } ${errors.quantity ? "is-invalid" : ""}`}
                                placeholder="Enter quantity "
                                {...register("quantity", {
                                    required: "Quantity is required",
                                    pattern: {
                                        value: /^\d+$/,
                                        message: "Invalid value.",
                                    },
                                })}
                            />
                            {errors.quantity && (
                                <div className="invalid-feedback">
                                    {errors.quantity.message}
                                </div>
                            )}
                        </div>

                        <div className={`mb-3 `}>
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
                                {...register("categoryId", {
                                    required: "Category Id is required",
                                    pattern: {
                                        value: /^\d+$/,
                                        message: "Invalid category",
                                    },
                                })}
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
                            // to="/products"
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
