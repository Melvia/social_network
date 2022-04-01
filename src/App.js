import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feed, Photo, Header } from "./components";

const App = () => (
  <div className="App">
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/photo/:id" element={<Photo />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
