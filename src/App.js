import "./App.css";
import Analytics from "./Component/Analytics";
import ContentBody from "./Component/ContentBody";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContentBody />
      <Analytics />
    </div>
  );
}

export default App;
