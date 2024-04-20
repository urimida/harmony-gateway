import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstSelection from './kind/FisrtSelection';
import YoungSection from './kind/YoungSection';
import ElderSection from './kind/ElderSection';
import Home from './kind/Home';
import Success from './kind/Success';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who" element={<FirstSelection />} />
        <Route path="/young-section" element={<YoungSection />} />
        <Route path="/elder-section" element={<ElderSection />} />
        <Route path="/success" element={<Success />} />
        {/* Add Route for "/young-section" */}
        {/* <Route path="/young-section" element={<YoungSection />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
