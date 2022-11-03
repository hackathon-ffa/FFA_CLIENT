import LeftNavBar from "./components/LeftNavBar";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <LeftNavBar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
