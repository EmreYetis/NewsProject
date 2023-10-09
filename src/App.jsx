import Newss from "./components/Newss";
import NewsBitcoin from "./components/NewsBitcoin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spor from "./components/categorys/Spor";
import Login from "./components/pages/Login";
import Busness from "./components/categorys/Busness";
import Technology from "./components/categorys/Technology";
import Health from "./components/categorys/Health";
import Science from "./components/categorys/Science";
import Entertainment from "./components/categorys/Entertainment";

function App() {
  return (
    <div className="App">
      <div className="news">
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Newss />} />
            <Route path="business" element={<Busness />} />
            <Route path="/spor" element={<Spor />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/health" element={<Health />} />
            <Route path="/science" element={<Science />} />
            <Route path="/entertainment" element={<Entertainment />} />
            Science
          </Routes>
          <Routes>
            <Route path="/pages/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/" element={<NewsBitcoin />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
