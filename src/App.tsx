import LeftNavBar from "./components/LeftNavBar";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <RecoilRoot>
          <LeftNavBar />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </RecoilRoot>
      </Router>
    </>
  );
};

export default App;
