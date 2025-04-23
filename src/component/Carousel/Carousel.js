import { useState, useRef, useEffect } from "react";
import './Carousel.css';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../assets/images/carousel', false, /\.(png|jpe?g|svg)$/));

const Carousel = ({ direction }) => {
    const carouselRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const requestIdRef = useRef(null);
    const startPositionRef = useRef(0);
    const [selectedImage, setSelectedImage] = useState(null);

    const closeModal = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        const carousel = carouselRef.current;

        const animate = () => {
            if (!isHovered) {
                startPositionRef.current += direction === 'left' ? -0.3 : 0.3;

                if (startPositionRef.current >= carousel.scrollWidth / 2) {
                    startPositionRef.current = 0;
                } else if (startPositionRef.current <= 0) {
                    startPositionRef.current = carousel.scrollWidth / 2;
                }
                carousel.scrollLeft = startPositionRef.current;
            }
            requestIdRef.current = requestAnimationFrame(animate);
        };

        requestIdRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(requestIdRef.current);
    }, [direction, isHovered]);

    return (
        <div className="carousel-container" ref={carouselRef} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="carousel-content">
                {images.map((image, index) => (
                    <img key={index} src={image} className="carousel-image" alt="" onClick={() => setSelectedImage(image)} />
                ))}
            </div>
            {selectedImage && (
                <div className="modal-window-image" onClick={closeModal}>
                    <div style={{ display: "flex" }} onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} className="modal-image" alt="" />
                        <p><button onClick={closeModal} className="modal-image-close-button"></button></p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Carousel;
