import React from "react";
import { useNavigate } from "react-router-dom";
import '../kind.css';
import Back from '../images/Back.png';
import HongikCom from '../images/HongikCom.png';
import SangSuCom from '../images/SangSuCom.png';
import StarBucksCom from '../images/StarBucksCom.png';
import PinOn from '../images/PinOn.png';
import Tabs from "./Tabs";

const MyPin = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/map');
    };

    const handleHongikClick = () => {
        navigate('/map-detail');
    };

    const handleOtherClick = () => {
        alert("Please click on Hongik University.");
    };

    return (
        <div className="MapContent">
            <div className="MapContent1">
                <button className="Back" style={{ backgroundImage: `url(${Back})` }} onClick={handleBackClick}></button>
                <div className="MapText">Map</div>
                <button className="PinOn2" style={{ backgroundImage: `url(${PinOn})` }}></button>
            </div>
            <div className="MapContent2">
                <button className="HongikCom" style={{ backgroundImage: `url(${HongikCom})` }} onClick={handleHongikClick}></button>
                <button className="StarBucksCom" style={{ backgroundImage: `url(${StarBucksCom})` }} onClick={handleOtherClick}></button>
                <button className="SangSuCom" style={{ backgroundImage: `url(${SangSuCom})` }} onClick={handleOtherClick}></button>
            </div>
            <Tabs></Tabs>
        </div>
    );
};

export default MyPin;
