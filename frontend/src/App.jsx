import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="appContainer">
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/trending" element={<div>Trending</div>} />
            <Route path="/search/:searchQuery" element={<div>Search</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
