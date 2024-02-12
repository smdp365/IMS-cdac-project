import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsEmployee from "./components/DetailsEmployee";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import ShowAllEmployee from "./components/ShowAllEmployee";
import Navbar from "./layout/Navbar";
import styles from "./css/App.module.css";
import AdminLogin from "./components/AdminLogin";
import Home from "./components/Home";

function App() {
    return (
        <div className={`${styles.App}`}>
            <Router>
                {/* Components */}
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    {/* <Route exact path="/" element={<ShowAllEmployee />} /> */}
                    <Route
                        exact
                        path="/addemployee"
                        element={<AddEmployee />}
                    />
                    <Route exact path="/adminlogin" element={<AdminLogin />} />
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
                </Routes>
            </Router>
        </div>
    );
}

export default App;
