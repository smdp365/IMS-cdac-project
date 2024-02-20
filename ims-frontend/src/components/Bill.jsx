import React, { useState } from "react";
import styles from "../css/Bill.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { globalProducts, useProducts } from "../utils/data";

export default function Bill(props) {
    const [formName, setFormName] = useState("");
    const [date, setDate] = useState("");
    // const [products, setProducts] = useProducts();
    console.log("globalProducts", globalProducts);

    const totalAmount = Object.keys(globalProducts)
        .filter((productId) => globalProducts[productId] !== null)
        .reduce(
            (totalPrice, productId) =>
                totalPrice + globalProducts[productId].totalPrice,
            0
        );

    let navigate = useNavigate();

    const printReceipt = () => {
        const receiptDiv = document.getElementById("tmp"); // Get the div with id "tmp"
        if (receiptDiv) {
            const originalContent = document.body.innerHTML; // Store the original content
            const printContent = receiptDiv.innerHTML; // Get the content of the receipt div

            document.body.innerHTML = printContent; // Set the body content to the receipt div content
            window.print(); // Print the content

            document.body.innerHTML = originalContent; // Restore the original content
        } else {
            console.error("Receipt div not found.");
        }
    };

    return (
        <>
            <div className={`container ${styles.mainContainer}`}>
                <div
                    id="tmp"
                    className={`card shadow-sm p-4 ${styles.receiptContainer}`}
                    style={{ borderRadius: "15px" }}
                >
                    <h1 className={`pb-3 ${styles.receiptHeader}`}>
                        BILL RECEIPT
                    </h1>
                    <div className={`row ${styles.billItemsContainer}`}>
                        <div className="table-responsive">
                            <table
                                className={`table table-striped ${styles.billTable}`}
                            >
                                <thead>
                                    <tr>
                                        <th>SNo.</th>
                                        <th>ProductName</th>
                                        <th>Unit Price</th>
                                        <th>Quantity</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(globalProducts)
                                        .filter(
                                            (productId) =>
                                                globalProducts[productId] !==
                                                null
                                        )
                                        .map((productId, index) => (
                                            // {globalProducts.keys().map((item, index) => (
                                            <tr key={index}>
                                                {/* serial number */}
                                                <td>{index + 1}</td>

                                                {/* product name */}
                                                <td>
                                                    {
                                                        globalProducts[
                                                            productId
                                                        ].name
                                                    }
                                                </td>

                                                {/* price per product */}
                                                <td>
                                                    {
                                                        globalProducts[
                                                            productId
                                                        ].price
                                                    }
                                                </td>

                                                {/* product quantity */}
                                                <td>
                                                    {
                                                        globalProducts[
                                                            productId
                                                        ].units
                                                    }
                                                </td>

                                                {/* total price */}
                                                <td>
                                                    {
                                                        globalProducts[
                                                            productId
                                                        ].totalPrice
                                                    }
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={`row ${styles.totalAmountContainer}`}>
                        <div
                            className="col-md-12"
                            style={{ textAlign: "right" }}
                        >
                            <strong>Total Amount: {totalAmount}</strong>
                        </div>
                    </div>
                    <div
                        className={`row justify-content-center ${styles.printButtonContainer}`}
                    >
                        <div className="col-md-6">
                            <button
                                className={`btn btn-primary btn-block ${styles.printButton}`}
                                onClick={printReceipt}
                            >
                                Print Receipt
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
