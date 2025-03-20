//Libs
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import StandardPage from "./components/StandardPage";
import Home from "pages/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<StandardPage />}>
        <Route path="*" element={<Home />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
