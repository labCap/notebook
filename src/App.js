import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { NotePage } from "./pages/NotePage";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/note" element={<NotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
