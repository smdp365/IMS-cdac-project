import { useEffect, useRef, useState } from "react";
import styles from "../css/Sales.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import BillForm from "./Bill";
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
      // console.log("prodctDict - ", productsDict);
      setProducts(productsDict);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  // const deleteProduct = async (id) => {
  //   await axios.delete(`http://localhost:8080/product/${id}`);
  //   loadProducts();
  // };

  // For increment and decrement count of product

  // const handleIncrement = () => {
  //   setUnitCount(unitCount + 1);
  // };

  // const handleDecrement = () => {
  //   if (unitCount > 0) {
  //     setUnitCount(unitCount - 1);
  //   }
  // };

  // Function to handle incrementing count for a specific product
  const handleIncrement = (productId) => {
    // console.log(
    //   "asasasjbibubj ",
    //   (unitCounts[productId] || 0) < products[productId].quantity,
    //   products[productId].id,
    //   unitCounts[productId],
    //   productId
    // );
    if ((unitCounts[productId] || 0) < products[productId].quantity) {
      const updatedUnitCount = (unitCounts[productId] || 0) + 1;
      setUnitCounts((unitCounts) => ({
        ...unitCounts,
        [productId]: updatedUnitCount, // Increment count by 1
      }));
      setTotalPrices((totalPrices) => ({
        ...totalPrices,
        [productId]: updatedUnitCount * products[productId].price,
      }));
      // console.log(
      //   "printed",
      //   updatedUnitCount,
      //   products[productId].price,
      //   totalPrices[productId]
      // );
    }
  };

  // Function to handle decrementing count for a specific product
  const handleDecrement = (productId) => {
    if (unitCounts[productId] > 0) {
      setUnitCounts((unitCounts) => ({
        ...unitCounts,
        [productId]: unitCounts[productId] - 1, // Decrement count by 1 if count > 0
      }));
    }
  };

  const printDivRef = useRef(null);

  // useEffect(() => {
  //   // Render the BillForm component into the hidden div when the component mounts
  //   printDivRef.current && (printDivRef.current.innerHTML = "<BillForm />");
  // }, []);

  // const salesData = [];

  // function printContent1() {
  //   // Open a new window
  //   const printWindow = window.open("", "_blank");

  //   // Render the BillForm component into the new window
  //   printWindow.document.body.innerHTML = "<BillForm />";

  //   // Wait for the content to be rendered, then print
  //   printWindow.onload = function () {
  //     printWindow.print();
  //   };
  // }
  // const printContentRef = useRef(null);

  // function printContent() {
  //   const printContent = printContentRef.current.innerHTML;
  //   const originalContent = document.body.innerHTML;

  //   document.body.innerHTML = printContent;
  //   window.print();
  //   document.body.innerHTML = originalContent;
  // }
  // function printContent() {
  //   // Print the content
  //   window.print();
  // }

  // function printContent() {
  //   console.log("Click the button");

  //   // Render the BillForm component into a hidden div
  //   const printDiv = document.createElement("div");
  //   printDiv.style.display = "none";
  //   document.body.appendChild(printDiv);
  //   ReactDOM.render(<BillForm />, printDiv);

  //   // Print the content
  //   window.print();

  //   // Clean up
  //   document.body.removeChild(printDiv);
  //   console.log("Click the button 2");
  // }

  return (
    <>
      {/* Table to print bill resecipt data */}
      {/* <div ref={printContentRef} style={{ display: "none" }}>
        <BillForm />
      </div>
      <BillForm id="contentToPrint" style={{ display: "none" }}></BillForm> */}
      <div className={`container ${styles.mainContainer}`}>
        <div className="py-4">
          <div className="table-responsive">
            <table className="table table-primary shadow">
              <thead>
                <tr>
                  <th className={`${styles.tableHeading}`} scope="col">
                    S.No.
                  </th>
                  <th className={`${styles.tableHeading}`} scope="col">
                    Product Id
                  </th>
                  <th className={`${styles.tableHeading}`} scope="col">
                    Product Name
                  </th>
                  <th className={`${styles.tableHeading}`} scope="col">
                    Unit Price
                  </th>
                  <th className={`${styles.tableHeading}`} scope="col">
                    Units
                  </th>
                  <th className={`${styles.tableHeading}`} scope="col">
                    Amount
                  </th>
                  {/* <th className={` ${styles.tableHeading}`} scope="col">
                    Actions
                  </th> */}
                </tr>
              </thead>

              <tbody>
                {Object.keys(products).map((productId, index) => {
                  const product = products[productId];
                  // console.log(productId, index, product);
                  // console.debug(productId, index, product);

                  return (
                    <tr key={product.id}>
                      <th
                        scope="row"
                        key={index}
                        className={`${styles.tableRow}`}
                      >
                        {index + 1}
                      </th>
                      <td className={`${styles.tableRow}`} key={product.id}>
                        {product.id}
                      </td>
                      <td className={`${styles.tableRow}`}>
                        {product.productName}
                      </td>
                      <td className={`${styles.tableRow}`}>{product.price}</td>

                      <td className={`${styles.tableRow}`}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "60px",
                          }}
                        >
                          {/* Pass product ID to handleIncrement and handleDecrement */}
                          <button
                            onClick={() => handleDecrement(product.id)}
                            className="btn btn-secondary "
                          >
                            -
                          </button>
                          {/* Display count for the corresponding product */}
                          <input
                            type="text"
                            value={unitCounts[product.id] || 0}
                            readOnly
                            className="form-control mr-2"
                            style={{ width: "40px" }}
                          />
                          {/* Pass product ID to handleIncrement */}
                          <button
                            onClick={() => handleIncrement(product.id)}
                            className="btn btn-secondary"
                          >
                            +
                          </button>
                        </div>
                      </td>

                      <td className={`${styles.tableRow}`}>
                        {totalPrices[product.id] || 0}
                      </td>
                    </tr>
                  );
                })}
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
                        price: products[k].price,
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
