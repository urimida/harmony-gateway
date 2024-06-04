import React from "react";
import '../kind.css';
import NewsBox from '../images/NewsBox.png';

const StoryComponent = ({ articleTitle, articleUrl, postDate }) => {
    return (
        <div className="StoryComponent" style={{ backgroundImage: `url(${NewsBox})` }}>
            <a href={articleUrl} className="HarmonyStoryTitle">
                {articleTitle}
            </a>
            <div className="PostDate">
                {postDate}
            </div>
        </div>
    );
};

export default StoryComponent;
