import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../kind.css';
import homeIcon from '../images/HomePage.png';
import pointsIcon from '../images/PointPage.png';
import mapIcon from '../images/MapPage.png';
import menuIcon from '../images/MyPage.png';
const Tabs = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState();

    const handleTabClick = (tabName, path) => {
        setActiveTab(tabName);
        navigate(path); // 클릭 시 해당 경로로 이동
    };

    useEffect(() => {
        const path = location.pathname;
        let newActiveTab;
        if (path.includes('points')) {
            newActiveTab = 'points';
        } else if (path.includes('map')) {
            newActiveTab = 'map';
        } else if (path.includes('menu')) {
            newActiveTab = 'menu';
        }else if (path.includes('home')) {
            newActiveTab = 'home';
        }
        

        if (newActiveTab !== activeTab) {
            setActiveTab(newActiveTab);
        }
    }, [location.pathname]);

    return (
        <div className="tab-container">
            <div className="tabs">
                <button
                    className={`tab-button ${activeTab === 'home' ? 'active' : ''}`}
                    onClick={() => handleTabClick('home', '/home')}
                >
                    <img src={homeIcon} alt="Home" />
                </button>
                <button
                    className={`tab-button ${activeTab === 'points' ? 'active' : ''}`}
                    onClick={() => handleTabClick('points', '/points')}
                >
                    <img src={pointsIcon} alt="Points" />
                </button>
                <button
                    className={`tab-button ${activeTab === 'map' ? 'active' : ''}`}
                    onClick={() => handleTabClick('map', '/map')}
                >
                    <img src={mapIcon} alt="Map" />
                </button>
                <button
                    className={`tab-button ${activeTab === 'menu' ? 'active' : ''}`}
                    onClick={() => handleTabClick('menu', '/menu')}
                >
                    <img src={menuIcon} alt="Menu" />
                </button>
            </div>
        </div>
    );
};

export default Tabs;
