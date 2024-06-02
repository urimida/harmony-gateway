import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './kind/Home';
import Points from './kind/Points';
import Map from './kind/Map';
import Menu from './kind/Menu';
import YoungSection from './kind/YoungSection';
import ElderSection from './kind/ElderSection';
import FirstPage from './kind/FirstPage';
import Success from './kind/Success';
import Explaination1 from './kind/Explaination1';
import Explaination2 from './kind/Explaination2';
import Explaination3 from './kind/Explaination3';
import Explaination4 from './kind/Explaination4';
import FirstSelection from './kind/FisrtSelection';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/who" element={<FirstSelection/>} />
                <Route path="/young-section" element={<YoungSection />} />
                <Route path="/elder-section" element={<ElderSection />} />
                <Route path="/success" element={<Success />} />
                <Route path="/explaination1" element={<Explaination1 />} />
                <Route path="/explaination2" element={<Explaination2 />} />
                <Route path="/explaination3" element={<Explaination3 />} />
                <Route path="/explaination4" element={<Explaination4 />} />
                <Route path="/home" element={<Home />} />
                <Route path="/points" element={<Points />} />
                <Route path="/map" element={<Map />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </Router>
    );
}

export default App;
