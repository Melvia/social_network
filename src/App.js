import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Photo, Header } from "./components";
import Feed from "./containers/Feed/Feed";
import Authorisation from "./containers/Authorization/Authorisation";
import { PATH_COMMON, PATH_PHOTO, PATH_AUTH } from "./Utils/paths";
import Error from "./components/Error/Error";
import { errorSelector } from "./store/selectors";
import { useSelector } from "react-redux";

import styles from "./App.module.css";

const App = () => {
  const textError = useSelector(errorSelector);
  console.log(textError);
  return (
    <div className="App">
      <Header />
      {textError && <Error text={textError} />}
      <BrowserRouter>
        <Routes className={styles.App_content}>
          <Route path={PATH_COMMON} element={<Feed />} />
          <Route path="/photo/:id" element={<Photo />} />
          <Route path={PATH_AUTH} element={<Authorisation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
