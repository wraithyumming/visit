import React from "react";
import './Portfoliostyle.css';
import Arro from '../../assets/icons/arrowdown.png'

const Portfolio = () => {
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
        </div>
    )

}
export default Portfolio