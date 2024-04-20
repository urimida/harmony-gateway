import React from "react";
import { useNavigate } from "react-router-dom";
import '../kind.css';
import BigLogo from '../images/BigLogo.png';

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="Home">
            <button className="BigLogoButton" onClick={() => navigate('/who')}>
                <img src={BigLogo} className="BigLogo" alt="BigLogo" />
            </button>
        </div>

    );
};

export default Home;
