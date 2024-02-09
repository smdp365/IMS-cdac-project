import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsEmployee from "./components/DetailsEmployee";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import ShowAllEmployee from "./components/ShowAllEmployee";

function App() {
    return (
        <div className="App">
            <Router>
                {/* Component */}
                <Navbar />

                <Routes>
                    <Route exact path="/" element={<ShowAllEmployee />} />
                    <Route exact path="/addemployee" element={<AddEmployee />} />
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
