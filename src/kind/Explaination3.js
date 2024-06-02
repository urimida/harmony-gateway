import React from "react";
import { useNavigate } from "react-router-dom";
import '../kind.css';
import Explaination3I from '../images/Explaination3.png'; // 이미지 파일을 가져옵니다.

const Explaination3 = () => {

    const navigate = useNavigate();

    return (
        <div className="Explaination-Container">
            <div className="Explaination" style={{ backgroundImage: `url(${Explaination3I})` }}>
                <button className="Next" onClick={() => navigate('/explaination4')}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Explaination3;
