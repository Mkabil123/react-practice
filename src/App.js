import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "./Components/H1ome";
import Home from "./Components/Home";
import Books from "./Components/Books";
import Mobilephone from "./Components/Mobilephone";
import Electronics from "./Components/Electronics";
import Desktop from "./Components/Desktop";
function App() {
  return (
    <Router>
      <Home1 />
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Book" element={<Books />}></Route>
        <Route path="/Electronics/Desktop" element={<Desktop />}></Route>
        <Route path="/Electronic" element={<Electronics />}></Route>

        <Route
          path="/Electronics/Mobilephone"
          element={<Mobilephone />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
