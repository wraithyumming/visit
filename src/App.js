import React from 'react';
import Header from './component/Header/Header';
import WelcomeBlock from './component/welcome/WelcomeBlock.js';
import ServicesBlock from './component/Services/ServicesBlock.js';
import Portfolio from './component/Portfolio/Portfolio.js';
import ReviewsCarousel from './component/Review/ReviewsCarousel.js';
import Basement from './component/Basement/Basement.js'


function App() {
  return (
    <div>

      <Header />
      <WelcomeBlock />
      <ServicesBlock />
      <Portfolio />
      <ReviewsCarousel />
      <Basement />

    </div>
  )
}

export default App;
