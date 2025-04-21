import React, { useState, useCallback, useEffect } from 'react';
import '../ModalWindow/modalWindow.css';
import tgIcon from '../assets/tg50.png';
import instIcon from '../assets/inst48.png';


const ModalWindowVisible = ({ show, onClose, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (show) {
            setIsVisible(true);
            document.addEventListener('keydown', handleKeyDown);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 800);
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                clearTimeout(timer);
            };
        }
    }, [show, handleKeyDown]);

    return (
        <div
            className={`modal-backdrop ${show ? 'show' : ''}`}
            style={{ display: isVisible }}
            onClick={onClose}
        >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="modal-close-button"
                    aria-label="Close modal"
                />
                {children}
                <div style={{ display: "flex", gap: "16px", marginTop: "30px" }}>
                    <a
                        href="https://t.me/deuceich"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-button"
                    >
                        <img src={tgIcon} alt="" className="social-icon" />
                        Telegram
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-button"
                    >
                        <img src={instIcon} alt="" className="social-icon" />
                        Instagram
                    </a>
                </div>

            </div>
        </div>
    );
};

export default ModalWindowVisible;