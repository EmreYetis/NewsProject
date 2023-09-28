import Newss from "./components/Newss";
import NewsBitcoin from "./components/NewsBitcoin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spor from "./components/Spor";
import Login from "./components/pages/Login";

function App() {
  return (
    <div className="App">
      <div className="news">
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Newss />} />
            <Route path="/spor" element={<Spor />} />
            
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
