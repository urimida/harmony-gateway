import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../kind.css';
import Back from '../images/Back.png';
import HongikImage from '../images/HongikImage.png';
import PinOn from '../images/PinOn.png';
import PinOff from '../images/PinOff.png';
import Rimi from '../images/Rimi.png';
import Jelly from '../images/Jelly.png';
import Add from '../images/Add.png';
import Tabs from "./Tabs";
import Posts from '../images/Posts.png';

const MapDetails = () => {
    const navigate = useNavigate();
    const [pinOn, setPinOn] = useState(true);

    const handleBackClick = () => {
        navigate('/map');  // 이전 페이지로 이동
    };

    const handlePinClick = () => {
        setPinOn(!pinOn);
    };

    const handleRimiClick = () => {
        alert('Please click on Jelly\'s post.');
    };

    const handleJellyClick = () => {
        navigate('/post-detail');
    };

    const handleAddClick = () => {
        navigate('/add-post');
    };

    return (
        <div className="MapDetails">
            <div className="MapContent1">
                <button className="Back" style={{ backgroundImage: `url(${Back})` }} onClick={handleBackClick}></button>
                <div className="MapText">Map</div>
                <button className="PinOn2" style={{ backgroundImage: `url(${PinOn})` }}></button>
            </div>

            <div className="MapContent22">
                <div className="HongikImage" style={{ backgroundImage: `url(${HongikImage})` }}></div>
            </div>

            <div className="MapContent33">
                <div className="MapInformationBox">
                    <div className="MapInformation1">Hong-Ik University</div>
                    <div className="MapInformation2">University</div>
                    <div className="MapInformation2">서울특별시 마포구 와우산로 94</div>
                </div>

                <button className="PinToggle" style={{ backgroundImage: `url(${pinOn ? PinOn : PinOff})` }} onClick={handlePinClick}></button>
                <div className="Add" style={{ backgroundImage: `url(${Add})` }} onClick={handleAddClick}></div>
            </div>

            <div className="Posts" style={{ backgroundImage: `url(${Posts})` }}></div>
            <div className="Jelly" style={{ backgroundImage: `url(${Jelly})` }} onClick={handleJellyClick}></div>
            <div className="Rimi" style={{ backgroundImage: `url(${Rimi})` }} onClick={handleRimiClick}></div>
            <Tabs></Tabs>
        </div>
    );
};

export default MapDetails;
