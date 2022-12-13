import "./App.css";
import Analytics from "./Component/Analytics";
import ContentBody from "./Component/ContentBody";
import Navbar from "./Component/Navbar";
import NewsLetter from "./Component/NewsLetter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContentBody />
      <Analytics />
      <NewsLetter />
    </div>
  );
}

export default App;
