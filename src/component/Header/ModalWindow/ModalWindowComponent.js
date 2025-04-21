import React, { useState } from "react";
import ModalWindowVisible from "./ModalWindowVisible";

const ModalWindowComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <button onClick={handleOpenModal} className="btn">Связаться</button>

      <ModalWindowVisible show={showModal} onClose={handleCloseModal}>
        <h2 style={{ color: "#4824ff", fontSize: "49px" }}>Контакты</h2>
        <p style={{ fontSize: "22px" }}>
          Вы можете связаться со мной в Телеграм <br /> или Инстаграм
        </p>
      </ModalWindowVisible>
    </div>
  );
};

export default ModalWindowComponent;
