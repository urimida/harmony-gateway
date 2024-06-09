import React from "react";
import { useNavigate } from "react-router-dom";
import '../kind.css';
import Back from '../images/Back.png';
import PostDetailIMG from '../images/PostDetailIMG.png';
import Tabs from "./Tabs";


const PostDetail = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/map-detail');
    };

    return (
        <div className="MapDetails">
            <div className="MapContent1">
                <button className="Back" style={{ backgroundImage: `url(${Back})` }} onClick={handleBackClick}></button>
                <div className="MapText">Map</div>
            </div>
            <div className="PostDetailContent1">
                <div className="PostDetailIMG" style={{ backgroundImage: `url(${PostDetailIMG})` }}></div>
            </div>
            <Tabs></Tabs>
        </div>
    );
};

export default PostDetail;
