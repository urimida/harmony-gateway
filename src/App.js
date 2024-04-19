// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstSelection from './kind/FisrtSelection';
import YoungSection from './kind/YoungSection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/who" element={<FirstSelection />} />
        <Route path="/young-section" element={<YoungSection />} />
        {/* Add Route for "/young-section" */}
        {/* <Route path="/young-section" element={<YoungSection />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
