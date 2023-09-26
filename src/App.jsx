import Newss from "./components/Newss";
import "./app.css";
import NewsBitcoin from "./components/NewsBitcoin";

function App() {
  return (
    <div className="App">
      <div className="news">
        <h1>BATEM NEWS</h1>
        <Newss />
        <NewsBitcoin />
      </div>
    </div>
  );
}

export default App;
