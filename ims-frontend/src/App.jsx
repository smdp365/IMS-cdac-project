import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adduser from "./components/Adduser";
import EditUser from "./components/EditUser";
import Viewuser from "./components/Viewuser";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Component */}
        <Navbar />
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<Adduser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<Viewuser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
