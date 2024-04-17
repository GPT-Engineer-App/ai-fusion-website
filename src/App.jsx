import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AiNewsGenerators from "./pages/AiNewsGenerators.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/ai-news-generators" element={<AiNewsGenerators />} />
      </Routes>
    </Router>
  );
}

export default App;
