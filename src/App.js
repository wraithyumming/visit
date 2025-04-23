import React from 'react';
import Header from './component/Header/Header';
import WelcomeBlock from './component/welcome/WelcomeBlock.js';
import ServicesBlock from './component/Services/ServicesBlock.js';
import Portfolio from './component/Portfolio/Portfolio.js'
import Carousel from './component/Carousel/Carousel.js';

function App() {
  return (
    <div>
      <Header />
      <WelcomeBlock />
      <ServicesBlock />
      <Portfolio />
      <Carousel />
    </div>
  )
}

export default App;
