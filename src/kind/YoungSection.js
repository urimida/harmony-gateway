import React from "react";
import { useNavigate } from "react-router-dom"; // React Router의 useNavigate 훅 임포트
import '../kind.css';
import BrightDoor from '../images/BrightDoor.png';
import BrightDoor2 from '../images/BrightDoor2.png';
import DoorButton from '../images/DoorButton.png'

const YoungSection = () => {

    const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 가져오기

    return (
        <div className="YoungSection">
            <div className="story">
            Welcome to the Harmony Room! Thanks for arriving on time. <br/> <br/> Find the button to open the door automatically. Isn't it convenient?
            </div>
            <img src={BrightDoor} className="BrightDoor1" alt="BrightDoor" />
            <img src={BrightDoor2} className="BrightDoor2" alt="BrightDoor" />
            <div className="story">
                Oh no! But there seems to be someone who appears unable to enter here because they don't know how to operate the button.
            </div>
            <div className="story2">
                Could you possibly assist that person in safely entering this room?
            </div>
            <div className="story3">
                If you could,
            </div>
            <div className="story4">
                Please press this button.
            </div>
            <button className="DoorButton" onClick={() => navigate('/success')}>
                <img src={DoorButton}  className="DoorButton-image" alt="DoorButton" />
            </button>
        </div>

    );
};

export default YoungSection;
