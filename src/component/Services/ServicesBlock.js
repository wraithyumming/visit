import React, { useState } from "react";
import ModalWindowVisible from '../Header/ModalWindow/ModalWindowVisible';

const ServicesBlock = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="service-block" draggable="false">
            <h1 style={{ fontSize: "52px" }}>Услуги</h1>
            <p style={{ fontSize: "27px" }}>
                Беру <span style={{ color: "#775cff" }}>на заказ дизайн визиток</span> по следующим направлениям
            </p>

            <div style={{ display: "flex" }}>
                <div className="tag"><div className="tag-icon" /> Рекламные баннеры</div>
                <div className="tag"><div className="tag-icon" /> Превью для видео</div>
                <div className="tag"><div className="tag-icon" /> Оформления Twitch каналов</div>
                <div className="tag"><div className="tag-icon" /> Уникальный дизайн</div>
            </div>

            <div style={{ display: "flex", marginTop: "16px" }}>
                <div className="tag"><div className="tag-icon" /> Оформлениe для Инстаграм</div>
                <div className="tag"><div className="tag-icon" /> Оформлениe для Дискорд</div>
            </div>

            <p style={{ fontSize: "27px" }}>
                Открыт для обсуждения того что вам интересно в этих направлениях.<br />
                Детальнее готов обсудить при
                <span
                    style={{ color: "#775cff", cursor: "pointer" }}
                    onClick={handleOpenModal}
                > личной переписке</span>.
            </p>

            <ModalWindowVisible show={showModal} onClose={handleCloseModal}>
                <h2 style={{ color: "#4824ff", fontSize: "49px" }}>Контакты</h2>
                <p style={{ fontSize: "22px" }}>
                    Вы можете связаться со мной в Телеграм <br /> или Инстаграм
                </p>
            </ModalWindowVisible>
        </div>
    );
};

export default ServicesBlock;