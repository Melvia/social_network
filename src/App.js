import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed/Feed";
import Photo from "./components/Photo/Photo";

import Header from "./components/Header/Header";

function App() {
  return (
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
}

export default App;
