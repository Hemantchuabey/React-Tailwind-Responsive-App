import "./App.css";
import Analytics from "./Component/Analytics";
import Cards from "./Component/Cards";
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
      <Cards />
    </div>
  );
}

export default App;
