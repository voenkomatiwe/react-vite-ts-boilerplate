import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router";

import { APP_ROUTES } from "@/constants/routes";
import Home from "@/pages/home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path={APP_ROUTES.HOME} element={<Home />} />
        <Route path="*" element={<Navigate replace to={APP_ROUTES.HOME} />} />
      </Routes>
    </Router>
  );
};

export default App;
