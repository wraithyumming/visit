import React, { useState } from "react";
import AllGallery from "../Portfolio/AllGallery/AllGallery";
import Banners from "../Portfolio/AllGallery/Banners";
import InstStories from "../Portfolio/AllGallery/InstStories";
import YouTubeDesign from "../Portfolio/AllGallery/YouTubeDesign";
import YouTubeThumbnails from "../Portfolio/AllGallery/YouTubeThumbnails";
import './Portfoliostyle.css';
import Arro from '../../assets/icons/arrowdown.png';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const renderComponent = () => {
        switch (selectedCategory) {
            case 'All':
                return <AllGallery />;
            case 'Banners':
                return <Banners />;
            case 'InstagramStories':
                return <InstStories />;
            case 'YouTubeDesign':
                return <YouTubeDesign />;
            case 'YouTubeThumbnails':
                return <YouTubeThumbnails />;
            default:
                return <AllGallery />;
        }
    };

    return (
        <div className="portfolio-block">
            <div className="first-block">
                <h1 className="main-title">Портфолио</h1>
                <div style={{ position: "absolute", marginLeft: "-660px" }}>
                    <p className="gradient-part-one"></p>
                    <p className="title-border">Портф</p>
                </div>
                <div style={{ position: "absolute", marginLeft: "620px" }}>
                    <p className="gradient-part-two"></p>
                    <p className="title-border">Фолио</p>
                </div>
                <img className="array-icon" src={Arro} alt="" draggable="false" />
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                <p className={`tag ${selectedCategory === 'All' ? 'selected' : ''}`}
                    onClick={() => setSelectedCategory('All')}>
                    Все работы
                </p>
                <p className={`tag ${selectedCategory === 'Banners' ? 'selected' : ''}`}
                    onClick={() => setSelectedCategory('Banners')}>
                    Баннеры
                </p>
                <p className={`tag ${selectedCategory === 'YouTubeThumbnails' ? 'selected' : ''}`}
                    onClick={() => setSelectedCategory('YouTubeThumbnails')}>
                    Обложки Ютуб
                </p>
                <p className={`tag ${selectedCategory === 'YouTubeDesign' ? 'selected' : ''}`}
                    onClick={() => setSelectedCategory('YouTubeDesign')}>
                    Оформление Ютуб
                </p>
                <p className={`tag ${selectedCategory === 'InstagramStories' ? 'selected' : ''}`}
                    onClick={() => setSelectedCategory('InstagramStories')}>
                    Сторис Инстаграм
                </p>
            </div>

            <div className="content" style={{ marginLeft: "-5vw", marginRight: "-5vw" }}>
                {renderComponent()}
            </div>
        </div>
    );
};

export default Portfolio;