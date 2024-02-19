import axios from "axios";
import React, { useState } from "react";
import styles from "../css/Bill.module.css";

export default function BillForm() {
  // State variables for form name, date, and bill items
  const [formName, setFormName] = useState("");
  const [date, setDate] = useState("");
  const [billItems, setBillItems] = useState([]);

  // Function to handle form name change
  const handleFormNameChange = (event) => {
    setFormName(event.target.value);
  };

  // Function to handle date change
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  // Function to handle adding a new bill item
  const addBillItem = () => {
    setBillItems([
      ...billItems,
      {
        serialNo: billItems.length + 1,
        particulars: "",
        quantity: 0,
        amount: 0,
      },
    ]);
  };

  // Function to handle changing particulars, quantity, and amount of a bill item
  const handleBillItemChange = (index, field, value) => {
    const updatedBillItems = [...billItems];
    updatedBillItems[index][field] = value;
    setBillItems(updatedBillItems);
  };

  // Calculate total amount
  const totalAmount = billItems.reduce((total, item) => total + item.amount, 0);

  return (
    <div className={`container ${styles.mainContainer}`}>
      <div className="py-4">
        <div className="table-responsive">
          <h1 className="pb-3">BILL RECIEPT</h1>
          <table className="table table-primary shadow">
            <thead>
              <tr>
                <th className={`${styles.tableHeading}`} scope="col">
                  S.No.
                </th>

                <th className={`${styles.tableHeading}`} scope="col">
                  Particulars
                </th>
                <th className={`${styles.tableHeading}`} scope="col">
                  Quantity
                </th>
                <th className={`${styles.tableHeading}`} scope="col">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {billItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.serialNo}</td>
                  <td>
                    <input
                      type="text"
                      value={item.particulars}
                      onChange={(e) =>
                        handleBillItemChange(
                          index,
                          "particulars",
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleBillItemChange(
                          index,
                          "quantity",
                          parseInt(e.target.value)
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.amount}
                      onChange={(e) =>
                        handleBillItemChange(
                          index,
                          "amount",
                          parseInt(e.target.value)
                        )
                      }
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" style={{ textAlign: "right" }}>
                  Total Amount:
                </td>
                <td>{totalAmount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    // </div>
  );
}
