import LeftNavBar from "./components/LeftNavBar";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <LeftNavBar />
      </Router>
    </>
  );
};

export default App;
