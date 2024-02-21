import { useEffect, useRef, useState } from "react";
import styles from "../css/Sales.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { globalProducts, useProducts } from "../utils/data";

export default function Sales() {
    const [products, setProducts] = useState({});
    const [unitCounts, setUnitCounts] = useState({});
    const [totalPrices, setTotalPrices] = useState({});

    globalProducts["asbd"] = 45;

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const result = await axios.get("http://localhost:8080/allproduct");
            const productsData = result.data;

            // Create a dictionary-like object from the products data
            const productsDict = {};

            productsData.forEach((product) => {
                // Assuming product has a unique identifier like 'id'
                productsDict[product.id] = product;
            });

            // Now, productsDict will contain the products data in dictionary-like format
            // console.log("prodctDict - ", productsDict);-------------------------------------
            setProducts(productsDict);
        } catch (error) {
            console.error("Error loading products:", error);
        }
    };

    // Function to handle incrementing count for a specific product
    const handleIncrement = (productId) => {
        if ((unitCounts[productId] || 0) < products[productId].quantity) {
            const updatedUnitCount = (unitCounts[productId] || 0) + 1;
            setUnitCounts((unitCounts) => ({
                ...unitCounts,
                [productId]: updatedUnitCount, // Increment count by 1
            }));
            setTotalPrices((totalPrices) => ({
                ...totalPrices,
                [productId]:
                    updatedUnitCount * products[productId].pricePerProduct,
            }));

            console.log(
                "printed",
                updatedUnitCount,
                products[productId].pricePerProduct,
                totalPrices[productId]
            );
        }
    };

    // Function to handle decrementing count for a specific product
    const handleDecrement = (productId) => {
        const updatedUnitCount = (unitCounts[productId] || 0) - 1;
        if (unitCounts[productId] > 0) {
            setUnitCounts((unitCounts) => ({
                ...unitCounts,
                [productId]: unitCounts[productId] - 1, // Decrement count by 1 if count > 0
            }));

            setTotalPrices((totalPrices) => ({
                ...totalPrices,
                [productId]:
                    updatedUnitCount * products[productId].pricePerProduct,
            }));
        }
    };

    const printDivRef = useRef(null);

    return (
        <>
            {/* Table to print bill resecipt data */}
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
                                        Product Id
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
                                        Units
                                    </th>
                                    <th
                                        className={`${styles.tableHeading}`}
                                        scope="col"
                                    >
                                        Amount (in Rs.)
                                    </th>
                                    {/* <th className={` ${styles.tableHeading}`} scope="col">
                    Actions
                  </th> */}
                                </tr>
                            </thead>

                            <tbody>
                                {Object.keys(products).map(
                                    (productId, index) => {
                                        const product = products[productId];
                                        // console.log(productId, index, product);
                                        // console.debug(productId, index, product);

                                        return (
                                            <tr key={product.id}>
                                                {/* serial number */}
                                                <th
                                                    scope="row"
                                                    key={index}
                                                    className={`${styles.tableRow}`}
                                                >
                                                    {index + 1}
                                                </th>

                                                {/* product id */}
                                                <td
                                                    className={`${styles.tableRow}`}
                                                    key={product.id}
                                                >
                                                    {product.id}
                                                </td>

                                                {/* product name */}
                                                <td
                                                    className={`${styles.tableRow}`}
                                                >
                                                    {product.productName}
                                                </td>

                                                {/* unit price */}
                                                <td
                                                    className={`${styles.tableRow}`}
                                                >
                                                    {product.pricePerProduct}
                                                </td>

                                                {/* units */}
                                                <td
                                                    className={`${styles.tableRow}`}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            justifyContent:
                                                                "center",
                                                        }}
                                                    >
                                                        {/* Pass product ID to handleIncrement and handleDecrement */}
                                                        <button
                                                            onClick={() =>
                                                                handleDecrement(
                                                                    product.id
                                                                )
                                                            }
                                                            className={`btn ${styles.incDecButton}`}
                                                        >
                                                            -
                                                        </button>
                                                        {/* Display count for the corresponding product */}
                                                        <input
                                                            type="text"
                                                            value={
                                                                unitCounts[
                                                                    product.id
                                                                ] || 0
                                                            }
                                                            readOnly
                                                            className={`form-control mr-2 ${styles.unitsInput}`}
                                                            style={{
                                                                width: "40px",
                                                            }}
                                                        />
                                                        {/* Pass product ID to handleIncrement */}
                                                        <button
                                                            onClick={() =>
                                                                handleIncrement(
                                                                    product.id
                                                                )
                                                            }
                                                            className={`btn ${styles.incDecButton}`}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>

                                                {/* Amount */}
                                                <td
                                                    className={`${styles.tableRow}`}
                                                >
                                                    {totalPrices[product.id] ||
                                                        0}
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </table>
                        <div className={`${styles.sideBar}`}>
                            <Link
                                className={`btn ${styles.addButton}`}
                                onClick={() => {
                                    // globalProducts.clear();
                                    console.log("Redirecting to Bill page");
                                    for (var k in globalProducts) {
                                        globalProducts[k] = null;
                                    }
                                    for (var k in products) {
                                        if (unitCounts[k] > 0) {
                                            globalProducts[k] = {
                                                id: products[k].id,
                                                name: products[k].productName,
                                                price: products[k]
                                                    .pricePerProduct,
                                                units: unitCounts[k],
                                                totalPrice: totalPrices[k],
                                            };
                                        }
                                    }
                                }}
                                to={{
                                    pathname: "/bill",
                                    state: { products },
                                    products: products,
                                }}
                            >
                                Bill
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
