import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feed, Photo, Header } from "./components";
import Authorisation from "./components/Authorization/Authorisation";
import Login from "./components/Login/Login";
import { PATH_COMMON, PATH_PHOTO, PATH_AUTH } from "./Utils/paths";

const App = () => (
  <div className="App">
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/photo/:id" element={<Photo />} />
        <Route path="/auth" element={<Authorisation />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
