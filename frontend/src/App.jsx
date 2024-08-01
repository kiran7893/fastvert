import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Home";
import AdminPanel from "./components/admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<AdminPanel />} />
        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
