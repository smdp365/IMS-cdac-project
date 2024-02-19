import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsEmployee from "./components/DetailsEmployee";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Navbar from "./layout/Navbar";
import styles from "./css/App.module.css";
import Home from "./components/Home";
import Employee from "./components/Employee";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Sales from "./components/Sales";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import DetailsProduct from "./components/DetailsProduct";
// import NewLogin from "./components/NewLogin";
import AdminLogin from "./components/AdminLogin";
import { useEffect, useState } from "react";
import { useEmployeeOptionVisibility } from "./utils/flags";
import Footer from "./components/Footer";

function App() {
  const isEmployeeOptionVisible = useEmployeeOptionVisibility();
  console.log("isEmployeeOptionVisible : ", isEmployeeOptionVisible);
  return (
    <Router>
      <div
        className={`${styles.App}`}
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        {/* Components */}
        <Navbar />
        <div style={{ flex: "1" }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/adminlogin" element={<AdminLogin />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/contactus" element={<ContactUs />} />
            {/* <Route exact path="/employee" element={<Employee />} /> */}
            {isEmployeeOptionVisible && (
              <>
                <Route exact path="/employee" element={<Employee />} />
                <Route exact path="/addemployee" element={<AddEmployee />} />
                {/* <Route exact path="/adminlogin" element={<AdminLogin />} /> */}
                <Route
                  exact
                  path="/editemployee/:id"
                  element={<EditEmployee />}
                />
                <Route
                  exact
                  path="/viewemployee/:id"
                  element={<DetailsEmployee />}
                />
                <Route exact path="/sales" element={<Sales />} />
                <Route exact path="/products" element={<Products />} />
                <Route exact path="/addproduct" element={<AddProduct />} />
                <Route
                  exact
                  path="/editproduct/:id"
                  element={<EditProduct />}
                />
                <Route
                  exact
                  path="/viewproduct/:id"
                  element={<DetailsProduct />}
                />
              </>
            )}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
