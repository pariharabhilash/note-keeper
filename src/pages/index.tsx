import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./Notes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Notes/>} />
      </Routes>
    </Router>
  );
};

export default App;
