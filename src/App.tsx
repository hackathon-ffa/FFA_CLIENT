import LeftNavBar from "./components/LeftNavBar";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import { RecoilRoot } from "recoil";
import VacationPage from "./pages/VacationPage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import OtherSignUpChange from "./pages/OtherSignUpPage";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <RecoilRoot>
          <LeftNavBar/>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/vacation" element={<VacationPage/>} />
            <Route path="/othersignup" element = {<OtherSignUpChange/>}/>
          </Routes>
        </RecoilRoot>
      </Router>
    </>
  );
};

export default App;
