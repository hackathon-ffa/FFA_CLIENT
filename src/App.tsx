import GlobalStyle from "./styles/global";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import { RecoilRoot } from "recoil";
import ManagementPage from "./pages/ManagementPage";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <RecoilRoot>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/management" element={<ManagementPage />} />
          </Routes>
        </RecoilRoot>
      </Router>
    </>
  );
};

export default App;
