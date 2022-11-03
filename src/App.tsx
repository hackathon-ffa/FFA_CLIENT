import LeftNavBar from "./components/LeftNavBar";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <LeftNavBar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
