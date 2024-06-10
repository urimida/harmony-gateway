import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './kind/Home';
import Points from './kind/Points';
import Map from './kind/Map';
import MyPage from './kind/MyPage';
import YoungSection from './kind/YoungSection';
import ElderSection from './kind/ElderSection';
import FirstPage from './kind/FirstPage';
import Explaination0 from './kind/Explaination0';
import Explaination1 from './kind/Explaination1';
import Explaination2 from './kind/Explaination2';
import Explaination3 from './kind/Explaination3';
import Explaination4 from './kind/Explaination4';
import FirstSelection from './kind/FisrtSelection';
import MyPin from './kind/MyPin';
import LoginPage from './kind/Login';
import SignUpPage from './kind/SignUpPage';
import MapDetails from './kind/MapDetails';
import PostDetail from './kind/PostDetail';
import AddPosts from './kind/AddPosts';
import Donation from './kind/Donation';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/who" element={<FirstSelection/>} />
                <Route path="/young-section" element={<YoungSection />} />
                <Route path="/elder-section" element={<ElderSection />} />
                <Route path="/explaination0" element={<Explaination0/>} />
                <Route path="/explaination1" element={<Explaination1 />} />
                <Route path="/explaination2" element={<Explaination2 />} />
                <Route path="/explaination3" element={<Explaination3 />} />
                <Route path="/explaination4" element={<Explaination4 />} />
                <Route path="/home" element={<Home />} />
                <Route path="/points" element={<Points />} />
                <Route path="/map" element={<Map />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/mypin" element={<MyPin />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/map-detail" element={<MapDetails />} />
                <Route path="/post-detail" element={<PostDetail />} />
                <Route path="/add-post" element={<AddPosts />} />
                <Route path="/donation" element={<Donation />} />
            </Routes>
        </Router>
    );
}

export default App;
