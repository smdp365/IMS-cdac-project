import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../css/DetailsProduct.module.css";

export default function DetailsProduct() {
    const [product, setProduct] = useState({
        productName: "",
        pricePerProduct: "",
        quantity: "",
        categoryId: "",
    });

    const { id } = useParams();

    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = async () => {
        const result = await axios.get(`http://localhost:8080/product/${id}`);
        setProduct(result.data);
    };

    return (
        <div className={`container ${styles.container}`}>
            <div className="row">
                <div
                    className={`col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ${styles.empData}`}
                >
                    <h2 className="text-center m-4">Product Details</h2>
                    <hr />

                    <b>Details of product id : {product.id}</b>

                    <ul className="list-group list-group-flush">
                        <li
                            className={`list-group-item ${styles.empDataItem} `}
                            style={{ marginTop: "20px" }}
                        >
                            <b>Product Name: </b>
                            {product.productName}
                        </li>

                        <li className={`list-group-item ${styles.empDataItem}`}>
                            <b>Unit Price: </b>
                            {product.pricePerProduct}
                        </li>

                        <li className={`list-group-item ${styles.empDataItem}`}>
                            <b>Quantity: </b>
                            {product.quantity}
                        </li>

                        <li className={`list-group-item ${styles.empDataItem}`}>
                            <b>Category Id: </b>
                            {product.categoryId}
                        </li>
                    </ul>
                    <Link
                        className={`btn  my-2 ${styles.backBtn}`}
                        to="/products"
                    >
                        Back to List
                    </Link>
                </div>
            </div>
        </div>
    );
}
