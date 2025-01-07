import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Page2 from "./Page2";
import Page3 from "./Page3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/page2" element={<Page2 />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Router>
  );
}

export default App;
