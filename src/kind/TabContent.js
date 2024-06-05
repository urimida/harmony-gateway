import React from 'react';
import '../kind.css';

const TabContent = ({ activeTab }) => {
    return (
        <div>
            {activeTab === 'home' && (
                <div id="home" className="tab-content active">
                    {/* Home content here */}
                </div>
            )}
            {activeTab === 'points' && (
                <div id="points" className="tab-content active">
                    {/* Points content here */}
                </div>
            )}
            {activeTab === 'map' && (
                <div id="map" className="tab-content active">
                    {/* Map content here */}
                </div>
            )}
            {activeTab === 'mypage' && (
                <div id="mypage" className="tab-content active">
                    {/* Menu content here */}
                </div>
            )}
        </div>
    );
};

export default TabContent;
