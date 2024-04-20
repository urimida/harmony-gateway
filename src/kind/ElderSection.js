import React from "react";
import { useNavigate } from "react-router-dom"; // React Router의 useNavigate 훅 임포트
import '../kind.css';
import Snow from '../images/Snow.png';
import Hand from '../images/Hand.png';
import DoorButton from '../images/DoorButton.png'

const ElderSection = () => {

    const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 가져오기

    return (
        <div className="ElderSection">
            <div className="story-elder1">
                As I stroll down the moonlit path, memories of the past flood my mind.
            </div>
            <img src={Snow} className="Snow" alt="Snow" />
            <div className="story-elder2">
                It seems like the world isn't the same as it used to be these days. What do you think?
            </div>
            <img src={Hand} className="Hand" alt="Hand" />
            <div className="story-elder3">
                Wait, I see a girl waving <br/> over there. It seems like she wants to hear our story, but the door is closed.
            </div>
            <div className="story-elder4">
                I'm not sure what that button is, but should we give it a try? Let's share <br/> our tale from there.
            </div>
            <div className="story2-elder">
                If you could,
            </div>
            <div className="story3-elder">
                Please press this button.
            </div>
            <button className="DoorButton" onClick={() => navigate('/success')}>
                <img src={DoorButton} className="DoorButton-image" alt="DoorButton" />
            </button>
        </div>

    );
};

export default ElderSection;
