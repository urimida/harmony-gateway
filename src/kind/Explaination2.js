import React from "react";
import { useNavigate } from "react-router-dom";
import '../kind.css';
import Explaination2I from '../images/Explaination2.png'; // 이미지 파일을 가져옵니다.

const Explaination2 = () => {

    const navigate = useNavigate();

    return (
        <div className="Explaination-Container">
            <div className="Explaination" style={{ backgroundImage: `url(${Explaination2I})` }}>
                <button className="Next" onClick={() => navigate('/explaination3')}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Explaination2;
