import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../kind.css';
import Tabs from "./Tabs";
import MapImage from '../images/Map.png';
import ListofLocations from '../images/ListofLocations.png';
import SangSu from '../images/SangSu.png';
import Hongik from '../images/Hongik.png';
import Return from '../images/Return.png';
import StarBucks from '../images/StarBucks.png';
import PinOn from '../images/PinOn.png';
import PinOff from '../images/PinOff.png';
import Region from '../images/Region.png';
import Back from '../images/Back.png';
import HongikCom from '../images/HongikCom.png';
import SangSuCom from '../images/SangSuCom.png';
import StarBucksCom from '../images/StarBucksCom.png';

const Map = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleLocationClick = (location) => {
        if (location === "Hongik") {
            navigate('/map-detail');
        } else {
            alert("Please click on Hongik University.");
        }
    };

    const handleReturnButtonClick = () => {
        alert("The page will be refreshed.");
    };

    return (
        <div className="Map">
            <div className="MapComponent1">
                <button className="Region" style={{ backgroundImage: `url(${Region})` }}></button>
                <button className="PinOff" onClick={() => navigate('/mypin')} style={{ backgroundImage: `url(${PinOff})` }}></button>
                <button className="MapReturnButton" onClick={handleReturnButtonClick} style={{ backgroundImage: `url(${Return})` }}></button>
            </div>

            <div className="MapComponent2" style={{ backgroundImage: `url(${MapImage})` }}>
                <div className="Hongikcom">
                    <button className="PinOn" style={{ backgroundImage: `url(${PinOn})` }}></button>
                    <button className="Hongik" onClick={() => handleLocationClick("Hongik")} style={{ backgroundImage: `url(${Hongik})` }}></button>
                </div>
                <button className="StarBucks" onClick={() => handleLocationClick("StarBucks")} style={{ backgroundImage: `url(${StarBucks})` }}></button>
                <button className="SangSu" onClick={() => handleLocationClick("SangSu")} style={{ backgroundImage: `url(${SangSu})` }}></button>
                <button className="ListofLocations" onClick={toggleModal} style={{ backgroundImage: `url(${ListofLocations})` }}></button>
            </div>

            <div className={`PostModal ${showModal ? 'show' : ''}`}>
                <div className="MapContent">
                    <div className="MapContent1">
                        <button className="Back" onClick={toggleModal} style={{ backgroundImage: `url(${Back})` }}></button>
                        <div className="MapText">Map</div>
                    </div>
                    <div className="MapContent2">
                        <button className="HongikCom" onClick={() => handleLocationClick("Hongik")} style={{ backgroundImage: `url(${HongikCom})` }}></button>
                        <button className="StarBucksCom" onClick={() => handleLocationClick("StarBucks")} style={{ backgroundImage: `url(${StarBucksCom})` }}></button>
                        <button className="SangSuCom" onClick={() => handleLocationClick("SangSu")} style={{ backgroundImage: `url(${SangSuCom})` }}></button>
                    </div>
                </div>
            </div>

            <Tabs />
        </div>
    );
};

export default Map;
