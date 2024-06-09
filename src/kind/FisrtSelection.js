import React from "react";
import { useNavigate } from "react-router-dom"; // React Router의 useNavigate 훅 임포트
import '../kind.css';
import Yellowbox from '../images/YellowBox.png';
import WhiteBox from  '../images/WhiteBox.png';
import separatorImage from '../images/separatorImage.png';

const FirstSelection = () => {
    const navigate = useNavigate();

    return (
        <div className="first-selection">
            <div className="container">
                <div className="quote-box" style={{ backgroundImage: `url(${Yellowbox})` }} onClick={() => navigate('/elder-section')}>
                    <div className="title1">
                    Digital technology proficiency aspirant
                    </div>
                </div>
                <div className="separator">
                    <img src={separatorImage} alt="Separator" />
                </div>
                <div className="quote-box" style={{ backgroundImage: `url(${WhiteBox})` }}  onClick={() => navigate('/young-section')}>
                    <div className="title2">
                    Seeker of seasoned wisdom
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstSelection;
