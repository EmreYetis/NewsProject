import Newss from "./components/Newss";
import "./app.css";
import NewsBitcoin from "./components/NewsBitcoin";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="news">
        <Navbar />
        <Newss />
        <NewsBitcoin />
      </div>
    </div>
  );
}

export default App;
