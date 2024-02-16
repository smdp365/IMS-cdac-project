import { useEffect, useState } from "react";
import styles from "../css/Products.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const result = await axios.get("http://localhost:8080/allproduct");
        setProducts(result.data);
    };

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:8080/product/${id}`);
        loadProducts();
    };

    return (
        <>
            <div className={`${styles.sideBar}`}>
                <Link className={`btn ${styles.addButton}`} to="/addproduct">
                    Add Product
                </Link>
            </div>

            <div className={`container ${styles.mainContainer}`}>
                <div className="py-4">
                    <div className="table-responsive">
                        <table className="table table-primary shadow">
                            <thead>
                                <tr>
                                    <th
                                        className={`${styles.tableHeading}`}
                                        scope="col"
                                    >
                                        S.No.
                                    </th>
                                    <th
                                        className={`${styles.tableHeading}`}
                                        scope="col"
                                    >
                                        ID
                                    </th>
                                    <th
                                        className={`${styles.tableHeading}`}
                                        scope="col"
                                    >
                                        Product Name
                                    </th>
                                    <th
                                        className={`${styles.tableHeading}`}
                                        scope="col"
                                    >
                                        Unit Price
                                    </th>
                                    <th
                                        className={`${styles.tableHeading}`}
                                        scope="col"
                                    >
                                        Quantity
                                    </th>
                                    <th
                                        className={` ${styles.tableHeading}`}
                                        scope="col"
                                    >
                                        Category Id
                                    </th>
                                    <th
                                        className={` ${styles.tableHeading}`}
                                        scope="col"
                                    >
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={product.id}>
                                        <th
                                            scope="row"
                                            key={index}
                                            className={`${styles.tableRow}`}
                                        >
                                            {index + 1}
                                        </th>
                                        <td
                                            className={`${styles.tableRow}`}
                                            key={product.id}
                                        >
                                            {product.id}
                                        </td>
                                        <td className={`${styles.tableRow}`}>
                                            {product.productName}
                                        </td>
                                        <td className={`${styles.tableRow}`}>
                                            {product.pricePerProduct}
                                        </td>
                                        <td className={`${styles.tableRow}`}>
                                            {product.quantity}
                                        </td>
                                        <td className={`${styles.tableRow}`}>
                                            {product.categoryId}
                                        </td>
                                        <td className={`${styles.tableRow}`}>
                                            <Link
                                                className={`btn mx-2 ${styles.Btn}`}
                                                to={`/viewproduct/${product.id}`}
                                            >
                                                &#x2630;
                                            </Link>
                                            <Link
                                                className={`btn mx-2 ${styles.Btn}`}
                                                to={`/editproduct/${product.id}`}
                                            >
                                                &#9998;
                                            </Link>
                                            <button
                                                className={`btn mx-2 ${styles.Btn}`}
                                                onClick={() =>
                                                    deleteProduct(product.id)
                                                }
                                            >
                                                &#10006;
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
