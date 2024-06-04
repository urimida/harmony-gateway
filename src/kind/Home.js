import React, { useState } from "react";
import '../kind.css';
import Tabs from "./Tabs";
import MissionStatusImg from '../images/MissionStatus.png';
import NewsBox from '../images/NewsBox.png';
import ListofPosts from '../images/ListofPosts.png';

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

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

            <div className="HomeComponent2">
                <div className="TodayHarmonyStory">Today’s Harmony Story</div>

                <div className="StoryComponent" style={{ backgroundImage: `url(${NewsBox})` }}>
                    <a href="https://n.news.naver.com/article/052/0002042417?sid=102" className="HarmonyStoryTitle">
                        The children who helped the grandfather collecting waste paper.
                    </a>
                </div>
                <button className="PostButton" onClick={toggleModal} style={{ backgroundImage: `url(${ListofPosts})` }}></button>
            </div>

            <div className={`PostModal ${showModal ? 'show' : ''}`}>
                <div className="PostContent">
                    <h2>Posts</h2>
                    <button onClick={toggleModal}>Close</button>
                    {/* Add your post content here */}
                </div>
            </div>


                
                <Tabs />

        </div>
    );
};

export default Home;
