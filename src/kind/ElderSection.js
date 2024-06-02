import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../kind.css';
import Snow from '../images/Snow.png';
import Hand from '../images/Hand.png';
import DoorButton from '../images/Hand.png';
import DoorButtonClicked from '../images/DoorButton.png';

const ElderSection = () => {
    const [buttonImage, setButtonImage] = useState(DoorButton);
    const [clicked, setClicked] = useState(false); // 클릭 여부를 나타내는 상태 추가
    const navigate = useNavigate();

    const handleClick = () => {
        // 첫 번째 클릭일 때
        if (!clicked) {
            // 이미지 변경
            setButtonImage(DoorButtonClicked);
            // 클릭 여부 변경
            setClicked(true);
        } else {
            // 두 번째 클릭일 때
            // 원하는 경로로 이동
            navigate('/explaination1');
        }
    };

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
                Please press the button.
            </div>
            <button className="DoorButton" onClick={handleClick}>
                <img src={buttonImage} className="HandButton" alt="DoorButton" />
            </button>
        </div>
    );
};

export default ElderSection;