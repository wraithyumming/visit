import React, {useState} from "react";

const modalWindow = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false)
    }
    
    <button onClick={handleOpenModal} className="btn">Связаться</button>
}
export default modalWindow