import React from "react";
import { useNavigate } from "react-router-dom";
import '../kind.css';
import Back from '../images/Back.png';
import Logo from '../images/Logo.png';
import Tabs from "./Tabs";


const Donation = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/points');
    };

    const handleLogoClick = () => {
        alert("Thank you for your warm love.");
        navigate('/home');
    };

    return (
        <div className="Donation">
            <div className="MapContent1">
                <button className="Back" style={{ backgroundImage: `url(${Back})` }} onClick={handleBackClick}></button>
                <div className="MapText">Donate</div>
            </div>
            <div className="MyPointsSum">
                3,500
            </div>
            <div className="inputGroup">
                <label htmlFor="How much?">How much?</label>
                <input
                    type="How much?"
                    id="How much?"
                    name="How much?"
                    placeholder="Please enter the amount you wish."
                    required
                />
            </div>
            <div className="Logo" style={{ backgroundImage: `url(${Logo})` }} onClick={handleLogoClick}></div>
            <div className="ThankstoDonates">
                Your donated points will be contributed to a child protection organization.
            </div>
            <Tabs></Tabs>
        </div>
    );
};

export default Donation;
