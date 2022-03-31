import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";
import Photo from "./components/Photo";

import Header from "./components/Header";

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
