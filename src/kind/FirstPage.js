import React from "react";
import { useNavigate } from "react-router-dom";
import '../kind.css';
import BigLogo from '../images/BigLogo.png';

const FirstPage = () => {

    const navigate = useNavigate();
    return (
        <div className="FirstPage">
            <button className="BigLogoButton" onClick={() => navigate('/who')}>
                <img src={BigLogo} className="BigLogo" alt="BigLogo" />
            </button>
        </div>

    );
};

export default FirstPage;
