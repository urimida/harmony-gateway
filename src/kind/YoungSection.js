import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router의 useNavigate 훅 임포트
import '../kind.css';
import BrightDoor from '../images/BrightDoor.png';
import BrightDoor2 from '../images/BrightDoor2.png';
import DoorButton from '../images/BrightDoor2.png';
import DoorButtonClicked from '../images/DoorButton.png';

const YoungSection = () => {

    const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 가져오기
    const [buttonImage, setButtonImage] = useState(DoorButton);
    const [clicked, setClicked] = useState(false); // 클릭 여부를 나타내는 상태 추가

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
            navigate('/login');
        }
    };

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
                Please press the button.
            </div>
            <button className="DoorButton" onClick={handleClick}>
                <img src={buttonImage} className="HandButton" alt="DoorButton" />
            </button>
        </div>

    );
};

export default YoungSection;