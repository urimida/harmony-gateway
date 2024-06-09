import React from "react";
import { useNavigate } from "react-router-dom";
import '../kind.css';
import Tabs from "./Tabs";
import DefaultProfile from '../images/DefaultProfile.png';
import Setting from '../images/Setting.png';

const MyPage = () => {
    const navigate = useNavigate();

    const handleSettingClick = () => {
        alert("Settings feature is currently unavailable.");
    };

    const handleNotificationSettingClick = () => {
        alert("Notification settings have been changed.");
    };

    const handleMyPostListClick = () => {
        navigate('/post-detail');
    };

    const handleDonatePointsClick = () => {
        navigate('/donation');
    };

    return (
        <div className="MyPage">
            <div className="MyPageComponent1">
                <div className="MyPageandSetting">
                    <div className="My">
                        MY Page
                    </div>
                    <button className="Setting" onClick={handleSettingClick}>
                        <img src={Setting} className="SettingImage" alt="Setting" />
                    </button>
                </div>

                <div className="Profile">
                    <button className="DefaultProfile" >
                        <img src={DefaultProfile} className="DefaultProfileImage" alt="DefaultProfileImage" />
                    </button>
                    <div className="NickName">
                        USER
                    </div>
                </div>
            </div>

            <div className="MyPageComponent2">
                <button className="Width100Button2" onClick={handleMyPostListClick}>
                    My Post List
                </button>
                <button className="Width100Button2" onClick={() => navigate('/points')}>
                    My Points
                </button>
                <button className="Width100Button2" onClick={handleDonatePointsClick}>
                    Donate Points
                </button>
                <button className="Width100Button2" onClick={handleNotificationSettingClick}>
                    Notification Setting
                </button>
                <button className="Width100Button2" onClick={() => navigate('/login')}>
                    Logout
                </button>
            </div>
            <Tabs />
        </div>
    );
};

export default MyPage;
