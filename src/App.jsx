import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gyms from "./pages/Gyms"
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gyms" element={<Gyms />} />
      </Routes>
    </Router>
  );
}

export default App;
