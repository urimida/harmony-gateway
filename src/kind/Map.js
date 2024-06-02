import React from "react";
import { useNavigate } from "react-router-dom"; // React Router의 useNavigate 훅 임포트
import '../kind.css';
import Tabs from "./Tabs";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="Home">
            <div className="HomeComponent1">
                <div className="MissionStatus">
                    <div className="title1">
                        Seeker of seasoned wisdom
                    </div>
                </div>
            </div>
            <div className="HomeComponent1">
                <div className="MissionStatus">
                    <div className="TodayHarmonyStory">
                        Today’s Harmony Story
                    </div>
                    <div className="title1">
                        <a href="https://n.news.naver.com/article/052/0002042417?sid=102" className="HarmonyStoryTitle">
                            The children who helped the grandfather collecting waste paper.
                        </a>
                    </div>
                </div>
            </div>
            <Tabs></Tabs>
        </div>
    );
};

export default Home;
