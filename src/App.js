import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./Components/Mainpage";
import Homepage from "./Components/Homepage";
import Desktop from "./Components/Desktop";
import Mobilephone from "./Components/Mobilephone";
import Laptop from "./Components/Laptop";
import Bookpage from "./Components/Bookpage";
function App() {
  return (
    <Router>
      <Mainpage />
      <Routes>
        <Route path="/Home" element={<Homepage />}></Route>
        <Route path="/Electronics/Desktop" element={<Desktop />}></Route>
        <Route path="/Electronics/Laptop" element={<Laptop />}></Route>
        <Route
          path="/Electronics/Mobilephone"
          element={<Mobilephone />}
        ></Route>
        <Route path="/Books" element={<Bookpage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
