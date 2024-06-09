import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../kind.css';
import Back from '../images/Back.png';
import AddPhotos from '../images/AddPhotos.png';
import Tabs from "./Tabs";
import CheckOn from '../images/CheckOn.png';
import CheckOff from '../images/CheckOff.png';

const AddPosts = () => {
    const navigate = useNavigate();
    const [checkStatus, setCheckStatus] = useState({
        digitalKnowledge: false,
        experienceWisdom: false
    });

    const handleBackClick = () => {
        navigate('/map-detail');
    };

    const handleCheckToggle = (type) => {
        setCheckStatus(prevState => ({
            ...prevState,
            [type]: !prevState[type]
        }));
    };

    const handlePostClick = () => {
        // 포스트 버튼 클릭 시 알림 표시
        alert("Your post has been uploaded. The post will be reviewed and updated on the website by tomorrow.");

        // 포스트 이후 /map 페이지로 이동
        navigate('/map');
    };

    return (
        <div className="AddPosts">
            <div className="MapContent1">
                <button className="Back" style={{ backgroundImage: `url(${Back})` }} onClick={handleBackClick}></button>
                <div className="MapText">Map Page</div>
            </div>
            <div className="AddPhotos" style={{ backgroundImage: `url(${AddPhotos})` }}></div>

            <div className="Type">
                <div className="What">
                    Type
                </div>
                <div className="Type-1" onClick={() => handleCheckToggle('digitalKnowledge')}>
                    <div className="Check" style={{ backgroundImage: `url(${checkStatus.digitalKnowledge ? CheckOn : CheckOff})` }}></div>
                    <div className="What">
                        Digital knowledge
                    </div>
                </div>
                <div className="Type-1" onClick={() => handleCheckToggle('experienceWisdom')}>
                    <div className="Check" style={{ backgroundImage: `url(${checkStatus.experienceWisdom ? CheckOn : CheckOff})` }}></div>
                    <div className="What">
                        Experience & Wisdom
                    </div>
                </div>
                <div className="inputGroupBox">
                <div className="inputGroup">
                    <label htmlFor="Title">Title</label>
                    <input
                        type="Title"
                        id="Title"
                        name="Title"
                        placeholder="Please write the Title."
                        required
                    />
                </div>
                </div>
                <div className="inputGroup">
                    <label htmlFor="Contents">Contents</label>
                    <input
                        type="Contents"
                        id="Contents"
                        name="Contents"
                        placeholder="Please write the Contents."
                        required
                    />
                </div>
                <div className="WhiteBox"></div>

                <button className="Post" onClick={handlePostClick}>Post</button>
            </div>

            <Tabs></Tabs>
        </div>
    );
};

export default AddPosts;
