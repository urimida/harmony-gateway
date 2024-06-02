import React from "react";
import { useNavigate } from "react-router-dom"; // React Router의 useNavigate 훅 임포트
import '../kind.css';
import Tabs from "./Tabs";
import MissionStatusImg from '../images/MissionStatus.png';


const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="Home">
            <div className="HomeComponent1">
                <div className="HomeComponent1-2">
                    <div className="MyPoints">
                        <div className="MyPoints1">
                            My Point
                        </div>
                        <div className="MyPoints2">
                            2500
                        </div>
                    </div>
                    <div className="MissionStatus" style={{ backgroundImage: `url(${MissionStatusImg})` }}>
                    </div>
                    <div className="MyPoints">
                        <div className="MyPoints1">
                            My Point
                        </div>
                        <div className="MyPoints2">
                            2500
                        </div>
                    </div>
                </div>
                <div className="mission">
                    Share wisdom 3 times: 1,000 points.
                </div>
            </div>


            <div className="HomeComponent1">
                <div className="TodayHarmonyStory">
                    Today’s Harmony Story
                </div>9

                <div className="StoryComponent">
                    <a href="https://n.news.naver.com/article/052/0002042417?sid=102" className="HarmonyStoryTitle">
                        The children who helped the grandfather collecting waste paper.
                    </a>
                </div>

            </div>


            <Tabs></Tabs>
        </div>


    );
};

export default Home;
