import React from "react";
import { useNavigate } from "react-router-dom";
import '../kind.css';
import Explaination1I from '../images/Explaination1.png'; // 이미지 파일을 가져옵니다.

const Explaination1 = () => {

    const navigate = useNavigate();

    return (
        <div className="Explaination-Container">
            <div className="Explaination" style={{ backgroundImage: `url(${Explaination1I})` }}>
                <button className="Next" onClick={() => navigate('/explaination2')}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Explaination1;
