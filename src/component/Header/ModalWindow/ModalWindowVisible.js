import React, { useState, useCallback, useEffect } from 'react';

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
            style={{ display: isVisible}} 
            onClick={onClose}
        >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button 
                    onClick={onClose} 
                    className="modal-close-button" 
                    aria-label="Close modal"
                />
                {children}
                <div style={{ display: "flex" }}>
                    <a 
                        href="https://t.me/deuceich" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-button social-telegram"
                    >
                        Telegram
                    </a>
                    <a 
                        href="https://www.instagram.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-button social-instagram"
                    >
                        Instagram
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ModalWindowVisible;