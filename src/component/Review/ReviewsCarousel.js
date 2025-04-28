import React, { useEffect, useRef } from 'react';
import ReviewsCard from './ReviewsCard';
import './Review.css';

const ReviewsCarousel = () => {
  const containerRef = useRef(null);
  const reviewWidthRef = useRef(0);
  const visibleReviews = 3;

  const reviews = [
    { id: 1, name: "Никита Д.", link: "https://t.me/deuceich", text: "Текст отзыва, оставленный клиентом в Телеграмм канале, который можно открыть нажав на кнопку в правом верхнем углу этого блока" },
    { id: 2, name: "Андрей Б.", link: "https://t.me/deuceich", text: "Отзывы оставленные Андреем" },
    { id: 3, name: "Ваня Л.", link: "https://t.me/deuceich", text: "Отзывы оставленные Ваней" },
  ];

  const handleScroll = () => {
    const container = containerRef.current;
    const visibleWidth = reviewWidthRef.current * visibleReviews;

    if (container.scrollLeft <= 0) {
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = container.scrollWidth - 2 * visibleWidth;
      container.style.scrollBehavior = 'smooth';
    }

    if (container.scrollLeft >= container.scrollWidth - visibleWidth) {
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = visibleWidth;
      container.style.scrollBehavior = 'smooth';
    }
  };

  const btnPrevReviews = () => {
    containerRef.current.scrollLeft -= reviewWidthRef.current;
  };

  const btnNextReviews = () => {
    containerRef.current.scrollLeft += reviewWidthRef.current;
  };

  useEffect(() => {
    const box = containerRef.current;
    const firstReview = box.querySelector('.review-card');
    reviewWidthRef.current = firstReview?.clientWidth || 0;
    const width = reviewWidthRef.current * visibleReviews;

    box.scrollLeft = (box.scrollWidth - width) / 2;
    box.addEventListener('scroll', handleScroll);

    return () => {
      box.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="review-block">
      <h1>ОТЗЫВЫ</h1>
      <p className="description">
        Отзывы клиентов, написанные со своих
        <span className="selecting"> личных аккаунтов </span>
        Telegram. Всё прозрачно!<br />
        Любой отзыв можно
        <span className="selecting"> открыть </span> в Telegram и
        <span className="selecting"> спросить </span> о впечатлениях работы со мной у автора лично.
      </p>

      <div className="review-carousel">
        <div className="review-container" ref={containerRef}>
          {reviews.slice(-visibleReviews).map((review) => (
            <ReviewsCard key={`before-${review.id}`} {...review} />
          ))}
          {reviews.map((review) => (
            <ReviewsCard key={review.id} {...review} />
          ))}
          {reviews.slice(0, visibleReviews).map((review) => (
            <ReviewsCard key={`after-${review.id}`} {...review} />
          ))}
        </div>
      </div>


      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
        <p className="next-button" style={{ transform: "rotate(180deg)", cursor: "pointer" }}>
          <span className="array-prev-icon" onClick={btnPrevReviews}>←</span>
        </p>
        <p className="next-button" style={{ cursor: "pointer" }}>
          <span className="array-next-icon" onClick={btnNextReviews}>→</span>
        </p>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
