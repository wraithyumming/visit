import React, { useState, useCallback, useEffect } from 'react';
import './ModalWindow.css';

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
            document.removeEventListener('keydown', handleKeyDown);
            return () => clearTimeout(timer);
        }
    }, [show, handleKeyDown]);

    useEffect(() => {
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown])

    return (
        <div className={`modal-backdrop ${show ? 'show' : ''}`}
            style={{ display: isVisible }} onClick={onClose}>
            <div style={{ display: "flex", gap: "15px" }}>
                <a href="https://t.me/deuceich" target="_blank" rel="noopener noreferrer" className="social-button">
                    <span className="social telegram" />
                    Telegram</a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-button">
                    <span className="social instagram" />
                    Instagram</a>
            </div>
        </div>
    )
};

export default ModalWindowVisible;