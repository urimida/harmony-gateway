import React from "react";
import { useNavigate } from "react-router-dom";
import '../kind.css';
import Explaination4I from '../images/Explaination4.png'; // 이미지 파일을 가져옵니다.

const Explaination4 = () => {

    const navigate = useNavigate();

    return (
        <div className="Explaination-Container">
            <div className="Explaination" style={{ backgroundImage: `url(${Explaination4I})` }}>
                <button className="Next" onClick={() => navigate('/home')}>
                    Start
                </button>
            </div>
        </div>
    );
};

export default Explaination4;
