import React, { useState, useCallback, useEffect } from "react";
import './modalWindow.css'

const ModalWindow = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

const ModalWindowComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal} className="btn">Связаться</button>
      <ModalWindow show={showModal} onClose={handleCloseModal}>
        <h2 style={{ color: "#4824ff", fontSize: "49px" }}>Контакты</h2>
        <p style={{ fontSize: "22px" }}>
          Вы можете связаться со мной в Телеграм <br/> или Инстаграм
        </p>
      </ModalWindow>
    </div>
  );

  const ModalWindowVisible = ({ show, onClose, children}) => {
    const[isVisible, setIsVisilbe] = useState(false)
  }

};

export default ModalWindowComponent; 