import React from "react";

const WelcomeBlock  = () => {
    return (
        <div className="welcome-block">
            <div className="first-block">
                <h1>Стример <span className="title">deuceich</span></h1>
                <h2 className="subtitle">
                    Создаю <span className="highlight">контент</span><br />
                    и <span className="highlight">уникальный</span> геймплей <br /> под ваши запросы и идеи
                </h2>
                <h3 className="experience">
                    Начал заниматься<br />
                    стримами <span className="highlight">6 месяцев назад</span>
                </h3>
            </div>
        </div>
    );
};

export default WelcomeBlock;