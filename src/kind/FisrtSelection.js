import React from "react";
import { useNavigate } from "react-router-dom"; // React Router의 useNavigate 훅 임포트
import '../kind.css';
import Yellowbox from '../images/YellowBox.png';
import separatorImage from '../images/separatorImage.png';

const FirstSelection = () => {
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 가져오기

    const showMessage = (title, description) => {
        alert(`${title}\n${description}`);
    };

    const handleElderButtonClick = () => {
        showMessage('The elder', 'who wants to become proficient in digital technology.');
    };

    const handleYoungButtonClick = () => {
        // 두 번째 버튼을 누를 때 YoungSection 페이지로 이동
        navigate("/young-section");
    };

    return (
        <div className="first-selection">
            <div className="container">
                <div className="quote-box" style={{ backgroundImage: `url(${Yellowbox})` }} onClick={handleElderButtonClick}>
                    <div className="title">
                        The elder
                    </div>
                    <div className="description">
                        who wants to become proficient in digital technology.
                    </div>
                </div>
                <div className="separator">
                    <img src={separatorImage} alt="Separator" /> {/* 구분선 이미지를 <img> 요소로 삽입 */}
                </div>
                <div className="quote-box" style={{ backgroundImage: `url(${Yellowbox})` }} onClick={handleYoungButtonClick}>
                    <div className="title">
                        The young people
                    </div>
                    <div className="description">
                        who wants to acquire wisdom.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstSelection;
