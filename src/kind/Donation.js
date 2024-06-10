import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../kind.css';
import Back from '../images/Back.png';
import Logo from '../images/Logo.png';
import Tabs from "./Tabs";

const Donation = () => {
    const navigate = useNavigate();
    const [points, setPoints] = useState(50000);
    const [donationAmount, setDonationAmount] = useState("");

    const handleBackClick = () => {
        navigate('/points');
    };

    const handleLogoClick = () => {
        alert("Thank you for your warm love.");
        navigate('/home');
    };

    const handleDonationChange = (event) => {
        setDonationAmount(event.target.value);
    };

    const handleDonationSubmit = () => {
        const donation = parseInt(donationAmount, 10);
        if (isNaN(donation) || donation <= 0) {
            alert("Please enter a valid amount.");
        } else if (donation > points) {
            alert("You don't have enough points to donate this amount.");
        } else {
            setPoints(points - donation);
            alert(`You have successfully donated ${donation} points.`);
            setDonationAmount(""); // Clear the input field
        }
    };

    return (
        <div className="Donation">
            <div className="MapContent1">
                <button className="Back" style={{ backgroundImage: `url(${Back})` }} onClick={handleBackClick}></button>
                <div className="MapText">Donate</div>
            </div>
            <div className="MyPointsSum">
                {points}
            </div>
            <div className="inputGroup">
                <label htmlFor="donationAmount">How much?</label>
                <input
                    type="number"
                    id="donationAmount"
                    name="donationAmount"
                    placeholder="Please enter the amount you wish."
                    value={donationAmount}
                    onChange={handleDonationChange}
                    required
                />
            </div>
            <button className="DonateButton" onClick={handleDonationSubmit}>Donate</button>
            <div className="Logo" style={{ backgroundImage: `url(${Logo})` }} onClick={handleLogoClick}></div>
            <div className="ThankstoDonates">
                Your donated points will be contributed to a child protection organization.
            </div>
            <Tabs />
        </div>
    );
};

export default Donation;
