import React, { useEffect, useRef } from 'react';
import ReviewsCard from './ReviewsCard';
import './Review.css';

const ReviewsCarousel = () => {
  const containerRef = useRef(null);
  const reviewWidthRef = useRef(0);
  const visibleReviews = 3;

  const reviews = [
    { id: 1, name: "Никита Д.", link: "https://t.me/deuceich", text: "Текст отзыва от Никиты." },
    { id: 2, name: "Андрей Б.", link: "https://t.me/deuceich", text: "Отзывы оставленные Андреем." },
    { id: 3, name: "Ваня Л.", link: "https://t.me/deuceich", text: "Отзывы оставленные Ваней." },
  ];

  const extendedReviews = [
    ...reviews.slice(-visibleReviews),
    ...reviews,
    ...reviews.slice(0, visibleReviews)
  ];

  useEffect(() => {
    const container = containerRef.current;
    const firstReview = container.querySelector('.review-card');
    if (firstReview) {
      reviewWidthRef.current = firstReview.clientWidth + 20; // +gap
      const startScroll = reviewWidthRef.current * visibleReviews;
      container.scrollLeft = startScroll;
    }
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    const totalWidth = reviewWidthRef.current * (reviews.length + visibleReviews * 2);
    const startScroll = reviewWidthRef.current * visibleReviews;
    const endScroll = totalWidth - startScroll;

    if (container.scrollLeft <= 0) {
      container.scrollLeft = endScroll - reviewWidthRef.current;
    } else if (container.scrollLeft >= endScroll) {
      container.scrollLeft = startScroll;
    }
  };

  const btnPrevReviews = () => {
    containerRef.current.scrollBy({
      left: -reviewWidthRef.current,
      behavior: 'smooth',
    });
  };

  const btnNextReviews = () => {
    containerRef.current.scrollBy({
      left: reviewWidthRef.current,
      behavior: 'smooth',
    });
  };

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
        <div
          className="review-container"
          ref={containerRef}
          onScroll={handleScroll}
        >
          {extendedReviews.map((review, i) => (
            <ReviewsCard key={`${review.id}-${i}`} {...review} />
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
        <button className="next-button" style={{ transform: "rotate(180deg)" }} onClick={btnPrevReviews}>
          <span className="array-prev-icon">→</span>
        </button>
        <button className="next-button" onClick={btnNextReviews}>
          <span className="array-next-icon">→</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
