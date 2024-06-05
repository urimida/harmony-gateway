
import React, { useState } from "react";
import '../kind.css';
import Tabs from "./Tabs";
import MissionStatusImg from '../images/MissionStatus.png';
import ListofPosts from '../images/ListofPosts.png';
import StoryComponent from "./StoryComponent";
import XButton from '../images/XButton.png';


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
                    <div className="Ongoing">
                        <div className="OngoingContenets1">
                            2
                        </div>

                        <div className="OngoingContenets2">
                            /
                        </div>

                        <div className="OngoingContenets3">
                            3
                        </div>

                    </div>
                </div>
                <div className="mission">
                    Share wisdom 3 times: 1,000 points.
                </div>
            </div>

            <div className="HomeComponent2">
                <div className="TodayHarmonyStory">Today’s Harmony Story</div>
                <StoryComponent
                    articleTitle="The children who helped the grandfather collecting waste paper."
                    articleUrl="https://n.news.naver.com/article/052/0002042417?sid=102"
                    postDate="2024.05.30."
                />
                <button className="PostButton" onClick={toggleModal} style={{ backgroundImage: `url(${ListofPosts})` }}></button>
            </div>

            <div className={`PostModal ${showModal ? 'show' : ''}`}>
                <div className="PostContent">
                    <button className="CloseButton" onClick={toggleModal} style={{ backgroundImage: `url(${XButton})` }}></button>
                    <StoryComponent
                        articleTitle="The children who helped the grandfather collecting waste paper."
                        articleUrl="https://n.news.naver.com/article/052/0002042417?sid=102"
                        postDate="2024.05.30."
                    />
                    <StoryComponent
                        articleTitle="The children who helped the grandfather collecting waste paper."
                        articleUrl="https://n.news.naver.com/article/052/0002042417?sid=102"
                        postDate="2024.05.30."
                    />

                </div>
            </div>
            <Tabs />
        </div>
    );
};

export default Home;
