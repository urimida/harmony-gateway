import React from "react";
import { useNavigate } from "react-router-dom";
import '../kind.css';
import MidiumLogo from '../images/MidiumLogo.png';

const Success = () => {

    const navigate = useNavigate();

    return (
        <div className="Success">
            <div className="WelomeMessage">
            Thank you so much for accepting the invitation.
            </div>
            <button className="MidiumLogoButton" onClick={() => navigate('/')}>
                <img src={MidiumLogo} className="MidiumLogo" alt="MidiumLogo" />
            </button>
            <div className="WelomeMessage2">
                The current version of this app is developed up to this page.<br/><br/> To go back to the beginning, click on the logo
            </div>
        </div>

    );
};

export default Success;
