import React from "react";
import { useNavigate } from "react-router-dom";
import '../kind.css';
import Tabs from "./Tabs";
import MissionStatusImg from '../images/MissionStatus.png';

const Points = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleDonatePointsClick = () => {
        navigate('/donation'); // Navigate to the donation page
    };

    const handleDonationListClick = () => {
        // Show alert when "Donation List" button is clicked
        alert("You haven't made any donations yet!");
    };

    return (
        <div className="Points">
            <div className="PointComponent1">
                <div className="MyPoints-2">
                    <div className="MyPoints1-2">
                        My Point
                    </div>
                    <div className="MyPoints2-2">
                        50,000
                    </div>
                </div>
            </div>

            <button className="Width100Button" onClick={handleDonatePointsClick}>
                Donate My Points
            </button>
            <button className="Width100Button" onClick={handleDonationListClick}>
                Donation List
            </button>

            <div className="PointComponent2">
                <div className="TodayHarmonyStory">Today’s Mission</div>
                <div className="MissionStatus" style={{ backgroundImage: `url(${MissionStatusImg})` }}>
                </div>
                <div className="Ongoing">
                    <div className="OngoingContenets1">
                        2
                    </div>
                    <div className="OngoingContenets2">
                        /
                    </div>
                    <div className="OngoingContenets3">
                        3
                    </div>
                </div>
                <div className="mission">
                    Share wisdom 3 times: 1,000 points.
                </div>
            </div>

            <Tabs />
        </div>
    );
};

export default Points;
